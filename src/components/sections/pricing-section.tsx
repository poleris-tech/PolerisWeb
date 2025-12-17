"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { PriceCalculator } from "@/components/ui/price-calculator";

/**
 * Pricing Section Component
 * Displays three pricing tiers with modern card design
 * Mobile: Horizontal slider with navigation
 * Desktop: Grid layout
 */

const PRICING_TIERS = [
  {
    name: "Starter",
    oneTimePrice: 1500,
    monthlyPrice: 30,
    features: [
      "Up to 3 Pages",
      "Basic SEO Setup",
      "Mobile Responsive Design",
      "Standard Support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    oneTimePrice: 3200,
    monthlyPrice: 30,
    features: [
      "Up to 6 Pages",
      "SEO-Ready Structure",
      "Mobile-First Design",
      "1 Year Priority Support",
      "Google Analytics Setup",
      "Contact Form Integration",
      "100% Hand-Coded"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    oneTimePrice: null,
    monthlyPrice: null,
    features: [
      "Unlimited Pages",
      "Full SEO Optimization",
      "Advanced Integrations",
      "Dedicated Support",
      "Custom Features",
      "E-commerce Capabilities"
    ],
    buttonText: "Contact Us",
    popular: false
  }
];

// Pricing card component to reuse for both mobile and desktop
function PricingCard({ tier }: { tier: typeof PRICING_TIERS[0] }) {
  return (
    <div className={`relative h-full ${tier.popular ? 'md:-mt-4' : ''}`}>
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-[#4A90E2] to-cyan-400 text-white px-5 py-1.5 md:px-6 md:py-1.5 rounded-full text-sm md:text-sm font-bold shadow-xl tracking-wide">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Card */}
      <div className={`relative h-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 ${
        tier.popular
          ? 'bg-gradient-to-br from-[#4A90E2] via-[#5BA3F5] to-cyan-400 p-[2px] shadow-2xl shadow-[#4A90E2]/30'
          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#4A90E2]/50 hover:shadow-xl'
      }`}>
        <div className={`h-full rounded-2xl md:rounded-3xl ${
          tier.popular
            ? 'bg-gradient-to-br from-[#4A90E2] via-[#5BA3F5] to-cyan-400 text-white p-6 md:p-8'
            : 'bg-white dark:bg-gray-800 p-6 md:p-8'
        }`}>
          {/* Plan Name */}
          <h3 className={`text-2xl md:text-3xl font-black mb-4 md:mb-6 ${
            tier.popular ? 'text-white' : 'text-[#001f3d] dark:text-white'
          }`}>
            {tier.name}
          </h3>

          {/* Price */}
          <div className="mb-5 md:mb-6">
            {tier.oneTimePrice !== null && tier.monthlyPrice !== null ? (
              <div className="space-y-1.5 md:space-y-2">
                {/* One-time Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm md:text-base ${
                      tier.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                    }`}>$</span>
                    <span className={`text-3xl md:text-4xl lg:text-5xl font-black ${
                      tier.popular ? 'text-white' : 'text-[#001f3d] dark:text-white'
                    }`}>
                      {tier.oneTimePrice.toLocaleString()}
                    </span>
                  </div>
                  <p className={`text-xs ${
                    tier.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}>one-time</p>
                </div>

                {/* Monthly Price */}
                <div className="flex items-baseline gap-2 pt-0.5 md:pt-1">
                  <span className={`text-xs ${
                    tier.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}>+</span>
                  <span className={`text-lg md:text-xl font-bold ${
                    tier.popular ? 'text-white' : 'text-[#001f3d] dark:text-white'
                  }`}>
                    ${tier.monthlyPrice}/mo
                  </span>
                  <span className={`text-xs ${
                    tier.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}>hosting</span>
                </div>
              </div>
            ) : (
              /* Custom Pricing for Enterprise */
              <div className="py-1 md:py-2">
                <div className={`text-2xl md:text-3xl font-black mb-1 ${
                  tier.popular ? 'text-white' : 'text-[#001f3d] dark:text-white'
                }`}>
                  Custom
                </div>
                <p className={`text-xs ${
                  tier.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                }`}>Contact for quote</p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
            {tier.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 md:gap-2.5">
                <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                  tier.popular
                    ? 'bg-white/20'
                    : 'bg-[#4A90E2]/10'
                }`}>
                  <Check className={`w-3 h-3 ${
                    tier.popular ? 'text-white' : 'text-[#4A90E2]'
                  }`} strokeWidth={3} />
                </div>
                <span className={`text-sm leading-snug ${
                  tier.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <CustomButton
            href="#contact"
            variant="comic"
            size="lg"
            className={`w-full ${
              tier.popular
                ? 'bg-white text-[#4A90E2] hover:bg-gray-100 border-white'
                : 'bg-transparent text-[#4A90E2] border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white dark:text-[#4A90E2] dark:border-[#4A90E2] dark:hover:bg-[#4A90E2] dark:hover:text-white'
            }`}
          >
            {tier.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Professional (most popular)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PRICING_TIERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PRICING_TIERS.length) % PRICING_TIERS.length);
  };

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={50} position="absolute" />

      <div className="container relative z-20 mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Header Content */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3d] dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative max-w-sm mx-auto mb-12">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              aria-label="Previous plan"
            >
              <ChevronLeft className="w-5 h-5 text-[#4A90E2]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              aria-label="Next plan"
            >
              <ChevronRight className="w-5 h-5 text-[#4A90E2]" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {PRICING_TIERS.map((tier) => (
                  <div key={tier.name} className="w-full flex-shrink-0 px-2">
                    <PricingCard tier={tier} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {PRICING_TIERS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-[#4A90E2] w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
          {PRICING_TIERS.map((tier, index) => (
            <ScrollReveal key={tier.name} direction="up" delay={0.1 * index}>
              <PricingCard tier={tier} />
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Price Calculator */}
        <div className="mt-20 sm:mt-28">
          <PriceCalculator />
        </div>
      </div>
    </section>
  );
}
