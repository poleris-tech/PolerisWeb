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

      {/* Wave SVG at top - Multiple waves for shorter height */}
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

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blob 1 - Blue/Cyan */}
        <div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%)',
            top: '20%',
            left: '10%',
            animation: 'float-blob-1 20s ease-in-out infinite',
          }}
        ></div>

        {/* Blob 2 - Purple/Blue */}
        <div
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
            top: '50%',
            right: '5%',
            animation: 'float-blob-2 25s ease-in-out infinite',
          }}
        ></div>

        {/* Blob 3 - Cyan/Teal */}
        <div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(20, 184, 166, 0.3) 50%, transparent 100%)',
            bottom: '30%',
            left: '30%',
            animation: 'float-blob-3 30s ease-in-out infinite',
          }}
        ></div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Wave SVG at bottom - Multiple waves for shorter height */}
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

      <div className="container relative z-20 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header Content - Standardized */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-400"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-400 uppercase">
                Pricing
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              Simple, Transparent{" "}
              <span className="text-cyan-400">
                Pricing
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18px desktop */}
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-white/80 max-w-3xl mx-auto">
              Everything you need to succeed online. No hidden fees, just honest pricing for exceptional work.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Pricing Card - Single Centered Card */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6">
          <ScrollReveal direction="up" delay={0.2} duration={0.6}>
            <div className="group relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/30 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/20 dark:via-[#FDF2DB]/20 dark:to-[#E6D9CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:border-[#4A90E2] dark:group-hover:border-[#4A90E2] shadow-sm [box-shadow:0px_0px_0px_transparent] group-hover:[box-shadow:8px_8px_0px_#4A90E2] group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/20 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/10 dark:via-[#FDF2DB]/5 dark:to-[#E6D9CC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Popular Badge */}
                {PRICING_PLANS[0].popular && (
                  <div className="absolute top-0 right-0 px-5 py-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-xs font-bold rounded-bl-xl shadow-lg z-10">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Top Section - Pricing */}
                <div className="relative z-10 bg-gradient-to-br from-indigo-50/30 to-cyan-50/20 dark:from-gray-800/40 dark:to-gray-800/20 p-6 sm:p-8 md:p-9 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    {/* H3 Section: 18-20px mobile, 24-28px desktop */}
                    <h3 className="text-[20px] md:text-[24px] font-black text-[#001f3f] dark:text-white mb-6 leading-[1.4] md:leading-[1.3]">
                      {PRICING_PLANS[0].name}
                    </h3>

                    {/* Pricing Display */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-8">
                      {/* One-time Price */}
                      <div>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                            ${PRICING_PLANS[0].oneTimePrice?.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[#001f3f] dark:text-white/90 text-base sm:text-lg font-semibold">One-Time Build</p>
                        <p className="text-[#001f3f]/60 dark:text-white/60 text-sm">Complete website delivery</p>
                      </div>

                      {/* Plus Symbol */}
                      <div className="hidden sm:block text-4xl font-bold text-cyan-500">+</div>

                      {/* Monthly Price */}
                      <div>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#001f3f] dark:text-white">
                            ${PRICING_PLANS[0].monthlyPrice}
                          </span>
                          <span className="text-xl text-[#001f3f]/70 dark:text-white/70">/mo</span>
                        </div>
                        <p className="text-[#001f3f] dark:text-white/90 text-base sm:text-lg font-semibold">Hosting & Support</p>
                        <p className="text-[#001f3f]/60 dark:text-white/60 text-sm">Includes everything</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <CustomButton
                        href="?subject=Custom Website Package - Get Started&message=Hi! I'm interested in the Custom Website Package ($3,200 one-time + $30/month). I'd like to discuss my project and get started.#contact"
                        variant="comic"
                        size="lg"
                        className="px-8 sm:px-12"
                      >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </CustomButton>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Features */}
                <div className="relative z-10 p-6 sm:p-8 md:p-9 bg-white/50 dark:bg-gray-900/50">
                  {/* H3 Section: 16px mobile, 20px desktop */}
                  <h3 className="text-[16px] md:text-[20px] font-bold text-[#001f3f] dark:text-white mb-5 md:mb-6 text-center leading-[1.4] md:leading-[1.3]">
                    Everything You Need Included
                  </h3>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {PRICING_PLANS[0].features.map((feature, idx) => (
                      <ScrollReveal key={idx} direction="up" delay={0.05 * idx} duration={0.4}>
                        <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group/item">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center transition-all duration-300 mt-0.5 group-hover/item:scale-110 shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          {/* Body Text: 16px mobile, 18px desktop */}
                          <span className="text-base md:text-lg text-[#001f3f]/80 dark:text-white/90 group-hover/item:text-[#001f3f] dark:group-hover/item:text-white transition-colors duration-300 font-medium leading-[1.5] md:leading-[1.6]">
                            {feature}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-[#001f3f]/70 dark:text-white/70 text-sm">
                      <span className="font-semibold text-cyan-500">No hidden fees</span> • <span className="font-semibold text-cyan-500">No surprises</span> • <span className="font-semibold text-cyan-500">Cancel anytime</span>
                    </p>
                  </div>
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
