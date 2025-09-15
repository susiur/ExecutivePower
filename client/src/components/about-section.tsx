import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Trophy, Globe, Users, Download } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();
  
  const highlights = [
    {
      icon: Trophy,
      title: t("about.highlights.results.title"),
      description: t("about.highlights.results.description"),
    },
    {
      icon: Globe,
      title: t("about.highlights.global.title"),
      description: t("about.highlights.global.description"),
    },
    {
      icon: Users,
      title: t("about.highlights.leadership.title"),
      description: t("about.highlights.leadership.description"),
    },
  ];
  const handleDownloadCV = async () => {
    const fileName = t("about.cvFileName");
    
    try {
      // Intentar primero con la API (servidor Express) - pasando el idioma
      const currentLang = t("language.spanish") === "Español" ? "es" : "en";
      const response = await fetch(`/api/download-cv?lang=${currentLang}`);
      
      if (response.ok) {
        // Si la API funciona, descargar el archivo
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // Si la API no está disponible, intentar descarga directa
        console.log("API not available, trying direct download");
        downloadDirectly();
      }
    } catch (error) {
      // Si hay error con la API, intentar descarga directa
      console.log("API failed, trying direct download:", error);
      downloadDirectly();
    }
  };

  const downloadDirectly = () => {
    const fileName = t("about.cvFileName");
    // Descarga directa del archivo estático
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.target = "_blank"; // Abrir en nueva pestaña como fallback
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
                {t("about.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("about.description")}
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
                {t("about.downloadCV")}
              </Button>
            </div>
          </div>

          <div className="lg:text-right">
            <img
              src="/assets/MUV.jpg"
              alt="Retrato ejecutivo de Mauricio Uribe"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
