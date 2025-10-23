# Etapa de build usando imagen oficial de Lambda para Python 3.13 (AL2023)
# Ref: public.ecr.aws/lambda/python:3.13
FROM public.ecr.aws/lambda/python:3.13 AS build

# Paquete(s) a incluir en el layer
ARG PKGS="pymongo[srv]==4.8.0"

# Instala dependencias del layer en /opt/python (ruta estándar de layers)
RUN python -m pip install --upgrade pip && \
    mkdir -p /opt/python && \
    pip install --no-cache-dir ${PKGS} -t /opt/python

# Empaqueta el layer en un ZIP sin requerir 'zip' del sistema
# (usamos la stdlib de Python para máxima portabilidad)
RUN mkdir -p /layer && \
    python - <<'PY'
import shutil
shutil.make_archive('/layer/pymongo-layer', 'zip', '/opt', 'python')
PY

# Imagen final sólo para extraer el artefacto
FROM scratch AS export
COPY --from=build /layer/pymongo-layer.zip /pymongo-layer.zip 