import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-exec-blue/80 to-tech-purple/70"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/home.webp')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text4xl md:text-7xl font-bold mb-6 leading-tight">
          Escalar es Solo el Comienzo. Crecer de {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Forma Inteligente es el Desafío
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Ofrecemos dirección ejecutiva fractional para escalar su negocio de forma rentable, 
          profesionalizada y sin asumir los costos ni los riesgos de un C-Level full-time
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("experience")}
            size="lg"
            className="bg-white text-exec-blue hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-300"
          >
            Ver Historias de Éxito
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-2 border-white text-exec-blue hover:bg-white hover:text-exec-blue font-semibold text-lg px-8 py-4 h-auto transition-all duration-300"
          >
            Empieza tu transformación
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
