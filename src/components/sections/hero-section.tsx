import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Hero Section Component
 * Main landing section with CTA and value propositions
 */

const HERO_FEATURES = [
  "100% Hand-Coded",
  "Lightning Fast",
  "SEO Optimized",
  "Mobile-First Design",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16 text-center space-y-8 w-full">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
            <span className="font-medium">$0 Down • $175/Month</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Web Design That
              <br />
              <span className="text-primary">Delivers Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {HERO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>Trusted by businesses across the USA • 100% Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
