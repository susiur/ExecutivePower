import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderTitle = () => {
    const title = t("hero.title");
    
    // For English version with "Intelligence"
    if (title.includes(" Intelligence ")) {
      const parts = title.split(" Intelligence ");
      return (
        <>
          {parts[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Intelligence {parts[1]}
          </span>
        </>
      );
    }
    
    // For Spanish version with "Inteligencia"
    if (title.includes(" Inteligencia ")) {
      const parts = title.split(" Inteligencia ");
      return (
        <>
          {parts[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Inteligencia {parts[1]}
          </span>
        </>
      );
    }
    
    // Fallback for any other case
    return title;
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover z-0 scale-x-[-1]"
        style={{
          backgroundImage: "url('/assets/home.webp')",
          backgroundPosition: "80% center", 
          backgroundSize: "120%",
        }}
      />

      {/* Dark gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-left text-white max-w-4xl px-10 lg:px-24 pr-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight ">
          {renderTitle()}
        </h1>
        <p className="text-xl md:text-xl mb-4 leading-relaxed opacity-90">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button
            onClick={() => scrollToSection("experience")}
            size="lg"
            className="bg-white text-exec-blue hover:bg-gray-100 font-semibold text-lg px-4 py-2 h-auto transform hover:scale-105 transition-all duration-300"
          >
            {t("hero.cta1")}
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-2 border-white text-exec-blue hover:bg-white hover:text-exec-blue font-semibold text-lg px-4 py-2 h-auto transition-all duration-300"
          >
            {t("hero.cta2")}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
