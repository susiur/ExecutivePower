import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Globe } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      key: "email",
      icon: Mail,
      bgColor: "bg-exec-blue",
      href: "mailto:mauriciouribe@outlook.com",
      clickable: true,
    },
    {
      key: "phone",
      icon: Phone,
      bgColor: "bg-tech-purple",
      href: "tel:+573007312050",
      clickable: true,
    },
    {
      key: "linkedin",
      icon: Globe,
      bgColor: "bg-exec-blue",
      href: "https://linkedin.com/in/uribemauricio",
      clickable: true,
    },
  ];

  const whatsappLink = `https://wa.me/573007312050?text=${t("contact.whatsappMessage")}`;

  return (
    <section id="contact" className="py-20 bg-exec-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("contact.contactData")}</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const ContactElement = info.clickable ? 'a' : 'div';
                  const linkProps = info.clickable 
                    ? { 
                        href: info.href, 
                        target: info.key === 'linkedin' ? '_blank' : undefined,
                        rel: info.key === 'linkedin' ? 'noopener noreferrer' : undefined,
                        className: "flex items-center space-x-4 hover:bg-white/5 rounded-lg p-3 transition-colors cursor-pointer"
                      }
                    : { className: "flex items-center space-x-4 p-3" };

                  return (
                    <ContactElement key={info.key} {...linkProps}>
                      <div
                        className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <info.icon className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{t(`contact.info.${info.key}.title`)}</div>
                        <div className="text-gray-300 text-sm">
                          {t(`contact.info.${info.key}.subtitle`)}
                        </div>
                      </div>
                    </ContactElement>
                  );
                })}
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
                {t("contact.whatsappButton")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
