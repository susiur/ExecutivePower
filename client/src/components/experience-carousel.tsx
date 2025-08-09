import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Rocket, 
  Building2, 
  Crown 
} from "lucide-react";

export default function ExperienceCarousel() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const successStories = [
    {
      id: 1,
      key: "ipsos",
      icon: TrendingUp,
      image: "/assets/Ipsos.webp",
    },
    {
      id: 2,
      key: "virtual",
      icon: Rocket,
      image: "/assets/Virtual.webp",
    },
    {
      id: 3,
      key: "corporate",
      icon: Building2,
      image: "/assets/Corporativos.jpg",
    },
    {
      id: 4,
      key: "leadership",
      icon: Crown,
      image: "/assets/PerfilEjecutivo.jpg",
    },
    {
      id: 5,
      key: "conexcol",
      icon: TrendingUp,
      image: "/assets/FlujoCajaConexcol.png"
    }
  ];
  
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
            {t("experience.title")}
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
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
                              <story.icon className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-exec-dark">{t(`experience.stories.${story.key}.company`)}</h3>
                          </div>
                          <div className="text-sm text-exec-blue font-semibold">
                            {t(`experience.stories.${story.key}.period`)}
                          </div>
                          <h4 className="text-3xl font-bold text-exec-dark">
                            {t(`experience.stories.${story.key}.title`)}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {t(`experience.stories.${story.key}.description`)}
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-exec-light rounded-lg">
                              <div className="text-2xl font-bold text-exec-blue">
                                {t(`experience.stories.${story.key}.startValue`)}
                              </div>
                              <div className="text-sm text-gray-600">{t(`experience.stories.${story.key}.startLabel`)}</div>
                            </div>
                            <div className="text-center p-4 bg-exec-light rounded-lg">
                              <div className="text-2xl font-bold text-tech-purple">
                                {t(`experience.stories.${story.key}.endValue`)}
                              </div>
                              <div className="text-sm text-gray-600">{t(`experience.stories.${story.key}.endLabel`)}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            src={story.image}
                            alt={t("experience.title") + " - " + t(`experience.stories.${story.key}.company`)}
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
            {successStories.map((story, index) => (
              <button
                key={story.id}
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
