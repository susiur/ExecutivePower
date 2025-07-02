import { Button } from "@/components/ui/button";
import { Trophy, Globe, Users, Download } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Consistently delivered exponential growth across diverse industries and market conditions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Extensive experience in emerging markets with deep understanding of local dynamics and global trends.",
  },
  {
    icon: Users,
    title: "Team Builder",
    description:
      "Expert in building high-performing teams and establishing scalable operational frameworks.",
  },
];

export default function AboutSection() {
  const handleDownloadCV = () => {
    // Create a simple CV download
    const link = document.createElement("a");
    link.href = "/api/download-cv";
    link.download = "Executive_CV.pdf";
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
                About Me
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Seasoned C-Level executive with over 20 years of transformational
                leadership experience across emerging markets and digital
                transformation initiatives.
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
                Download Executive CV
              </Button>
            </div>
          </div>

          <div className="lg:text-right">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Professional executive portrait"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
