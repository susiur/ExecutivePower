import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, UserCheck, Handshake, Check } from "lucide-react";

const services = [
  {
    id: "consultoria",
    name: "Consultoría Estratégica",
    description: "Ingreso a mercados, expansión y crecimiento sostenido",
    price: "$200–250/hora",
    period: "Empresas medianas",
    icon: Lightbulb,
    features: [
      "Análisis de mercado y planeación",
      "Posicionamiento competitivo",
      "Ruta de crecimiento y expansión",
    ],
    buttonText: "Solicitar Sesión",
    popular: false,
  },
  {
    id: "ceo-fraccional",
    name: "CEO Fraccional",
    description: "Liderazgo ejecutivo a nivel C sin el costo fijo",
    price: "$3,000–12,000/mes",
    period: "Retainers mensuales",
    icon: UserCheck,
    features: [
      "Autoridad C-Level completa",
      "Liderazgo de equipos y procesos",
      "Transformación operativa",
      "Optimización de resultados",
    ],
    buttonText: "Agendar Llamada",
    popular: true,
  },
  {
    id: "juntas",
    name: "Asesor de Junta Directiva",
    description: "Acompañamiento estratégico y gobernanza corporativa",
    price: "$5,000/mes",
    period: "Empresas en expansión",
    icon: Handshake,
    features: [
      "Reuniones periódicas de junta",
      "Supervisión estratégica",
      "Mentoría a directivos",
    ],
    buttonText: "Más Información",
    popular: false,
  },
];

export default function RatesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rates" className="py-20 bg-exec-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-exec-dark mb-6">
            Inversión en Liderazgo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estructura de servicios flexible y orientada a resultados, adaptada
            al tamaño y etapa de tu organización.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`hover:shadow-xl transition-shadow duration-300 relative ${
                service.popular ? "border-2 border-tech-purple" : ""
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tech-purple text-white">
                  Más Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-exec-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon
                    className={`text-2xl ${
                      service.popular ? "text-tech-purple" : "text-exec-blue"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-exec-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Precio oculto, pero disponible en el JSON si se requiere */}
                {/* <div className="text-center">
                  <div className="text-4xl font-bold text-exec-dark mb-2">
                    {service.price}
                  </div>
                  <div className="text-gray-600">{service.period}</div>
                </div> */}

                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check
                        className={`h-5 w-5 ${
                          service.popular
                            ? "text-tech-purple"
                            : "text-exec-blue"
                        }`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full font-semibold transition-colors duration-200 ${
                    service.popular
                      ? "bg-tech-purple hover:bg-purple-700 text-white"
                      : "bg-exec-blue hover:bg-blue-700 text-white"
                  }`}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
