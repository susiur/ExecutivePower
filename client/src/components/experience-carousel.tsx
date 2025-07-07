import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, TrendingUp, Rocket } from "lucide-react";

const successStories = [
  {
    id: 1,
    company: "Ipsos Venezuela",
    period: "2003 - 2006",
    title: "Crecimiento de $0 a $3M en ingresos",
    description:
      "Lideré la estrategia completa de entrada al mercado y la construcción operativa para Venezuela. Establecí alianzas locales, formé un equipo de alto rendimiento e implementé procesos escalables que generaron un crecimiento sostenible en 3 años.",
    startValue: "$USD 0",
    endValue: "$USD 3M",
    startLabel: "Ingresos iniciales",
    endLabel: "Ingresos finales",
    icon: TrendingUp,
    image: "assets/Ipsos.webp",
  },
  {
    id: 2,
    company: "Virtual Impact",
    period: "2020 - 2022",
    title: "Multiplicación de valor por 9x",
    description:
      "Transformé una organización digital mediante pivotes estratégicos, integración tecnológica y expansión de mercado. Implementé toma de decisiones basada en datos y metodologías ágiles que multiplicaron el valor de la empresa por 9 en solo dos años.",
    startValue: "1x",
    endValue: "9x",
    startLabel: "Valor inicial",
    endLabel: "Valor final",
    icon: Rocket,
    image: "/assets/Virtual.webp",
  },
];

export default function ExperienceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = successStories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-20 bg-exec-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-exec-dark mb-6">
            Experiencia Comprobada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados excepcionales en distintas industrias gracias a liderazgo estratégico y excelencia operativa.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successStories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0">
                  <Card className="border-0">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-exec-blue to-tech-purple rounded-full flex items-center justify-center">
                              <story.icon className="text-white text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-exec-dark">
                              {story.company}
                            </h3>
                          </div>
                          <div className="text-sm text-exec-blue font-semibold">
                            {story.period}
                          </div>
                          <h4 className="text-3xl font-bold text-exec-dark">
                            {story.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {story.description}
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-exec-light rounded-lg">
                              <div className="text-2xl font-bold text-exec-blue">
                                {story.startValue}
                              </div>
                              <div className="text-sm text-gray-600">
                                {story.startLabel}
                              </div>
                            </div>
                            <div className="text-center p-4 bg-exec-light rounded-lg">
                              <div className="text-2xl font-bold text-tech-purple">
                                {story.endValue}
                              </div>
                              <div className="text-sm text-gray-600">
                                {story.endLabel}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            src={story.image}
                            alt={`Caso de éxito - ${story.company}`}
                            className="rounded-xl shadow-lg w-full h-auto"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-exec-blue hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-exec-blue hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Puntos indicadores */}
          <div className="flex justify-center mt-8 space-x-3">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-exec-blue"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
