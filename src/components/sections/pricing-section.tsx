"use client";

import { Check } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { PriceCalculator } from "@/components/ui/price-calculator";

/**
 * Pricing Section Component
 * Displays three pricing tiers with modern card design
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

export function PricingSection() {
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <ScrollReveal key={tier.name} direction="up" delay={0.1 * index}>
              <div className={`relative h-full ${tier.popular ? 'md:-mt-4' : ''}`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#4A90E2] to-cyan-400 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-[#4A90E2] via-[#5BA3F5] to-cyan-400 p-[2px] shadow-2xl shadow-[#4A90E2]/30'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#4A90E2]/50 hover:shadow-xl'
                }`}>
                  <div className={`h-full rounded-3xl ${
                    tier.popular
                      ? 'bg-gradient-to-br from-[#4A90E2] via-[#5BA3F5] to-cyan-400 text-white p-8'
                      : 'bg-white dark:bg-gray-800 p-8'
                  }`}>
                    {/* Plan Name */}
                    <h3 className={`text-3xl font-black mb-6 ${
                      tier.popular ? 'text-white' : 'text-[#001f3d] dark:text-white'
                    }`}>
                      {tier.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      {tier.oneTimePrice !== null && tier.monthlyPrice !== null ? (
                        <div className="space-y-2">
                          {/* One-time Price */}
                          <div>
                            <div className="flex items-baseline gap-1">
                              <span className={`text-base ${
                                tier.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                              }`}>$</span>
                              <span className={`text-4xl md:text-5xl font-black ${
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
                          <div className="flex items-baseline gap-2 pt-1">
                            <span className={`text-xs ${
                              tier.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                            }`}>+</span>
                            <span className={`text-xl font-bold ${
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
                        <div className="py-2">
                          <div className={`text-3xl font-black mb-1 ${
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
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
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
