import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 hover:text-exec-blue ${className}`}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLang === "es" ? "ES" : "EN"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage("es")}>
          {t("language.spanish")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage("en")}>
          {t("language.english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
