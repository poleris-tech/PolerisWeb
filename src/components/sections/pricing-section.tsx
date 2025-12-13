"use client";

import { PRICING_PLANS } from "@/constants/site-data";
import { Check, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { PriceCalculator } from "@/components/ui/price-calculator";

/**
 * Pricing Section Component
 * Displays pricing plans with features and optional add-ons
 * Matches the clean design language of the site
 */

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-[#001f3d] dark:bg-[#001529] text-white overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={50} position="absolute" />

      {/* Wave SVG at top */}
      <svg
        className="absolute top-[-3px] left-0 w-full h-auto z-10 pointer-events-none"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white dark:fill-gray-950"
        />
      </svg>

      {/* Wave SVG at bottom */}
      <svg
        className="absolute bottom-[-3px] left-0 w-full h-auto z-10 pointer-events-none"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'scaleY(-1)' }}
        aria-hidden="true"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white dark:fill-gray-950"
        />
      </svg>

      <div className="container relative z-20 mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Header Content */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
              
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to succeed online. No hidden fees, just honest pricing for exceptional work.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#4A90E2] hover:shadow-xl transition-all duration-300">
              {/* Popular Badge */}
              {PRICING_PLANS[0].popular && (
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Pricing Header */}
              <div className="p-8 md:p-12 text-center border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-[#001f3f] dark:text-white mb-8">
                  {PRICING_PLANS[0].name}
                </h3>

                {/* Pricing Display */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
                  {/* One-time Price */}
                  <div>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-cyan-500">
                        ${PRICING_PLANS[0].oneTimePrice?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[#001f3f] dark:text-white font-semibold">One-Time Build</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Complete website delivery</p>
                  </div>

                  {/* Plus Symbol */}
                  <div className="text-3xl font-bold text-cyan-500">+</div>

                  {/* Monthly Price */}
                  <div>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
                        ${PRICING_PLANS[0].monthlyPrice}
                      </span>
                      <span className="text-xl text-gray-600 dark:text-gray-400">/mo</span>
                    </div>
                    <p className="text-[#001f3f] dark:text-white font-semibold">Hosting & Support</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Includes everything</p>
                  </div>
                </div>

                {/* CTA Button */}
                <CustomButton
                  href="?subject=Custom Website Package - Get Started&message=Hi! I'm interested in the Custom Website Package ($3,200 one-time + $30/month). I'd like to discuss my project and get started.#contact"
                  variant="comic"
                  size="lg"
                  className="px-8"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CustomButton>
              </div>

              {/* Features Section */}
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-bold text-[#001f3f] dark:text-white mb-6 text-center">
                  Everything You Need Included
                </h3>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {PRICING_PLANS[0].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-semibold text-cyan-500">No hidden fees</span> • <span className="font-semibold text-cyan-500">No surprises</span> • <span className="font-semibold text-cyan-500">Cancel anytime</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Price Calculator */}
        <div className="my-20 sm:my-28">
          <PriceCalculator />
        </div>
      </div>
    </section>
  );
}
