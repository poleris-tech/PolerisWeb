import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackCarousel } from "@/components/sections/tech-stack-carousel";
import { ServicesSection } from "@/components/sections/services-section";

/**
 * Home Page
 * Main landing page - focusing on hero section
 */
export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navigation />
      <main className="w-full flex-1">
        <HeroSection />
        <TechStackCarousel />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
