"use client";

import { PRICING_PLANS, ADD_ONS } from "@/constants/site-data";
import { Check, Plus, ArrowRight } from "lucide-react";
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
            <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cerulean-blue-300"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                Pricing
              </span>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cerulean-blue-300"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[1.1] max-w-5xl px-4 sm:px-0">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-normal text-white/80 max-w-3xl mx-auto px-4 sm:px-6">
              Everything you need to succeed online. No hidden fees, just honest pricing for exceptional work.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Pricing Card - Single Centered Card */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4 sm:px-6">
          <ScrollReveal direction="up" delay={0.2} duration={0.6}>
            <div className="group relative">
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/15 hover:border-cerulean-blue-300 hover:translate-y-[-8px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:0px_12px_0px_rgba(103,232,249,0.3)]">

                {/* Popular Badge */}
                {PRICING_PLANS[0].popular && (
                  <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-cerulean-blue-400 to-cyan-400 text-white text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Top Section - Pricing */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-10 border-b border-white/20">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                      {PRICING_PLANS[0].name}
                    </h3>

                    {/* Pricing Display */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-8">
                      {/* One-time Price */}
                      <div>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                            ${PRICING_PLANS[0].oneTimePrice?.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg font-semibold">One-Time Build</p>
                        <p className="text-white/60 text-sm">Complete website delivery</p>
                      </div>

                      {/* Plus Symbol */}
                      <div className="hidden sm:block text-4xl font-bold text-cyan-400">+</div>

                      {/* Monthly Price */}
                      <div>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                            ${PRICING_PLANS[0].monthlyPrice}
                          </span>
                          <span className="text-xl text-white/70">/mo</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg font-semibold">Hosting & Support</p>
                        <p className="text-white/60 text-sm">Includes everything</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <CustomButton
                        href="?subject=Custom Website Package - Get Started&message=Hi! I'm interested in the Custom Website Package ($3,200 one-time + $30/month). I'd like to discuss my project and get started.#contact"
                        variant="comic"
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:from-cyan-500 hover:to-cyan-700 border-0 px-8 sm:px-12 py-4 text-base sm:text-lg font-bold shadow-2xl"
                      >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </CustomButton>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Features */}
                <div className="p-8 sm:p-10">
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-6 text-center">
                    Everything You Need Included
                  </h4>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {PRICING_PLANS[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group/item">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cerulean-blue-400 to-cyan-400 flex items-center justify-center transition-all duration-300 mt-0.5 group-hover/item:scale-110 shadow-lg">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm sm:text-base text-white/90 group-hover/item:text-white transition-colors duration-300 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-white/20 text-center">
                    <p className="text-white/70 text-sm">
                      <span className="font-semibold text-cyan-400">No hidden fees</span> • <span className="font-semibold text-cyan-400">No surprises</span> • <span className="font-semibold text-cyan-400">Cancel anytime</span>
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

        {/* Add-ons Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollReveal direction="down" delay={0.1}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.1]">
                Optional <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">Add-Ons</span>
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal">Enhance your website with these additional services</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
            {ADD_ONS.map((addon, index) => (
              <ScrollReveal key={addon.id} direction="up" delay={0.1 * index} duration={0.6}>
                <div className="group relative h-full">
                <div className="relative flex flex-col h-full rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 px-6 py-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/15 hover:border-cerulean-blue-300 hover:translate-x-[-4px] hover:translate-y-[-4px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:4px_4px_0px_rgba(103,232,249,0.3)] overflow-hidden">

                  {/* Header with icon and badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cerulean-blue-400 to-cyan-400 shadow-lg transition-all duration-500 group-hover:scale-110">
                      <Plus className="h-7 w-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                      addon.type === 'monthly'
                        ? 'bg-cerulean-blue-400/30 text-cerulean-blue-200 group-hover:bg-cerulean-blue-400 group-hover:text-white'
                        : 'bg-white/20 text-white/80 group-hover:bg-white/30'
                    } transition-all duration-500`}>
                      {addon.type === 'monthly' ? 'Monthly' : 'One-time'}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                    {addon.name}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-white/80 mb-6 leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-500">
                    {addon.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-auto">
                    <span className="text-4xl font-black text-white group-hover:text-cyan-400 transition-all duration-500">
                      ${addon.price}
                    </span>
                    <span className="text-sm text-white/70 font-medium">
                      {addon.type === 'monthly' ? '/month' : ''}
                    </span>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Value propositions */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal direction="up" delay={0.1} duration={0.7}>
            <div className="text-center space-y-3 group">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 mb-4 shadow-lg">
                <Check className="h-6 w-6 md:h-8 md:w-8 text-white transition-colors duration-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Custom Built</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                100% hand-coded, no templates or page builders
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <div className="text-center space-y-3 group">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 mb-4 shadow-lg">
                <Check className="h-6 w-6 md:h-8 md:w-8 text-white transition-colors duration-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">All-Inclusive</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Domain, hosting, SSL, and deployment included
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} duration={0.7}>
            <div className="text-center space-y-3 group">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 mb-4 shadow-lg">
                <Check className="h-6 w-6 md:h-8 md:w-8 text-white transition-colors duration-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">1 Year Support</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Priority support for one full year included
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
