import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageToggle from "@/components/language-toggle";

export default function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.experience"), id: "experience" },
    { label: t("nav.about"), id: "about" },
    { label: t("nav.rates"), id: "rates" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-exec-dark" : "text-white"
              }`}
            >
              {t("nav.title")}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-exec-blue ${
                    isScrolled ? "text-exec-dark" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-exec-blue text-white hover:bg-blue-700"
              >
                {t("nav.contact")}
              </Button>
              <LanguageToggle className={isScrolled ? "text-exec-dark" : "text-white"} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${
                    isScrolled ? "text-exec-dark" : "text-white"
                  } hover:bg-transparent`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-8 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-exec-dark hover:text-exec-blue transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-exec-blue text-white hover:bg-blue-700"
                  >
                    {t("nav.contact")}
                  </Button>
                  <div className="pt-4">
                    <LanguageToggle className="text-exec-dark" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
