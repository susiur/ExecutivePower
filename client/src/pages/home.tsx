import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceCarousel from "@/components/experience-carousel";
import AboutSection from "@/components/about-section";
import RatesSection from "@/components/rates-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceCarousel />
      <AboutSection />
      <RatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
