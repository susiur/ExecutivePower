import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const ImpactSection: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="impact" className="py-20 bg-exec-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-1">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-exec-dark mb-6">
                {t("impact.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t("impact.subtitle")}
              </p>
            </div>

            {/* Quote */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-exec-blue">
              <blockquote className="text-xl text-exec-dark font-medium italic leading-relaxed">
                "{t("impact.quote")}"
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-exec-blue to-tech-purple text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-4 h-auto"
              >
                {t("impact.cta")}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2">
            <img
              src="/assets/Impacto.jpg"
              alt={t("impact.title")}
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
