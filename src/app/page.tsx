import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackCarousel } from "@/components/sections/tech-stack-carousel";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PricingSection } from "@/components/sections/pricing-section";

/**
 * Home Page
 * Main landing page with full sections
 */
export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navigation />
      <main className="w-full flex-1">
        <HeroSection />
        <TechStackCarousel />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
