import { Button } from "@/components/ui/button";
import { Trophy, Globe, Users, Download } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Resultados Comprobados",
    description:
      "He escalado compañías en América Latina, multiplicando ingresos y liderando expansiones internacionales en tiempo récord.",
  },
  {
    icon: Globe,
    title: "Visión Global de Negocios",
    description:
      "Experiencia como Country Manager en Colombia, México y Venezuela. Participante de programas internacionales de innovación y venture capital.",
  },
  {
    icon: Users,
    title: "Liderazgo Estratégico",
    description:
      "CEO Fraccional y consultor senior con experiencia en transformación digital, formación de equipos y aceleración de crecimiento.",
  },
];

export default function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/api/download-cv";
    link.download = "Mauricio_Uribe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-exec-dark mb-6">
                Sobre Mí
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Soy Mauricio Uribe, ejecutivo C-Level con más de 20 años de experiencia liderando crecimiento empresarial, transformación digital y expansión internacional en América Latina. He construido operaciones desde cero, escalado startups y liderado equipos multinacionales. Hoy apoyo a organizaciones como CEO Fraccional y Consultor Senior para acelerar su crecimiento y profesionalizar su estructura. MBA, Especialista en Finanzas, y miembro activo de juntas directivas con visión global de negocios.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-exec-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <highlight.icon className="text-exec-blue h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-exec-dark mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gradient-to-r from-exec-blue to-tech-purple text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-4 h-auto"
              >
                <Download className="mr-3 h-5 w-5" />
                Descargar CV
              </Button>
            </div>
          </div>

          <div className="lg:text-right">
            <img
              src="/assets/Mauricio_Uribe.webp"
              alt="Retrato ejecutivo de Mauricio Uribe"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
