import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "mauriciouribe@outlook.com",
      subtitle: "Respuesta en menos de 24 horas",
      bgColor: "bg-exec-blue",
    },
    {
      icon: Phone,
      title: "+57 300 731-2050",
      subtitle: "Disponible de lunes a viernes",
      bgColor: "bg-tech-purple",
    },
    {
      icon: Linkedin,
      title: "linkedin.com/in/uribemauricio",
      subtitle: "Red profesional",
      bgColor: "bg-exec-blue",
    },
  ];

  const whatsappLink = `https://wa.me/573007312050?text=Hola%20Mauricio,%20estoy%20interesado%20en%20recibir%20acompañamiento%20ejecutivo`;

  return (
    <section id="contact" className="py-20 bg-exec-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hablemos sobre cómo un liderazgo ejecutivo puede acelerar el
            crecimiento de tu organización.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Datos de contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <info.icon className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-gray-300 text-sm">
                        {info.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-exec-blue to-tech-purple text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-4 h-auto flex items-center justify-center"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
