"use client";

import { Code, Search, Target, Server } from "lucide-react";
import { SERVICES } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SwipeableCards } from "@/components/ui/swipeable-cards";
import { Starfield } from "@/components/ui/starfield";

/**
 * Services Section Component
 * Displays available services with space-themed hover effects on a clean white background
 * Optimized vertical spacing for better text alignment and readability
 */

const ICON_MAP = {
  "web-design": Code,
  "seo": Search,
  "ppc": Target,
  "hosting": Server,
};

// Service Card Component for reuse in both grid and swipeable views
function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const IconComponent = ICON_MAP[service.id as keyof typeof ICON_MAP];

  return (
    <div className="group relative h-full">
      {/* Clean card with hover-reveal shadow */}
      <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50/30 dark:hover:from-gray-800 dark:hover:to-gray-800 hover:border-[#5c94ff] dark:hover:border-[#5c94ff] hover:translate-x-[-8px] hover:translate-y-[-8px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:8px_8px_0px_#5c94ff] dark:hover:[box-shadow:8px_8px_0px_#5c94ff]">

        {/* Icon Container - Clean and modern */}
        <div className="relative inline-flex self-center mb-6">
          <div className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-700 h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 shadow-lg shadow-blue-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
            {IconComponent && (
              <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
            )}
          </div>
        </div>

        {/* Title - Bold and clear */}
        <h3 className="text-xl sm:text-2xl md:text-2xl font-black text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 mb-6 leading-tight">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-700 mx-auto mb-6 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500"></div>

        {/* Features List - Clean minimal checkmarks */}
        <ul className="mt-auto flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm sm:text-base text-[#001f3f]/80 dark:text-gray-300 transition-all duration-500 group-hover:text-[#001f3f] dark:group-hover:text-white gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-500 dark:group-hover:bg-cyan-500 flex items-center justify-center transition-all duration-500 mt-0.5">
                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed flex-1 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Floating accent elements */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-800/40 opacity-50 group-hover:opacity-100 group-hover:bg-blue-500 dark:group-hover:bg-cyan-500 group-hover:scale-150 transition-all duration-500"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-cyan-200 dark:bg-cyan-800/40 opacity-50 group-hover:opacity-100 group-hover:bg-cyan-500 dark:group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white dark:bg-gray-950 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content - Standardized */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cerulean-blue-400"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-cerulean-blue-400 dark:text-cerulean-blue-300 uppercase">
                Our Services
              </span>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cerulean-blue-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#001f3f] dark:text-white mb-5 sm:mb-6 md:mb-8 leading-[1.1] max-w-5xl px-4 sm:px-0">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-cerulean-blue-300 via-cyan-300 to-cerulean-blue-400 bg-clip-text text-transparent">
                Dominate Online
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto w-full px-4 sm:px-6" >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal text-[#001f3f]/70 dark:text-gray-300">
                Hand-coded websites designed for <span className="font-semibold text-[#001f3f] dark:text-white">speed</span>, <span className="font-semibold text-[#001f3f] dark:text-white">SEO</span>, and <span className="font-semibold text-[#001f3f] dark:text-white">conversions</span>. No WordPress, no page builders—just pure performance.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Services Display - Swipeable on Mobile, Grid on Desktop */}
        <div className="flex justify-center w-full mb-16 sm:mb-20">
          {/* Mobile Swipeable Cards - Hidden on SM and above */}
          <div className="sm:hidden w-full max-w-md mx-auto">
            <SwipeableCards showControls={false}>
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Grid - Hidden on mobile, visible from SM and above */}
          <ul className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl w-full">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * index} duration={0.6}>
                <li className="h-full">
                  <ServiceCard service={service} />
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex justify-center mt-8 sm:mt-12">
            <CustomButton href="#contact" variant="comic" size="lg">
              Get Started Today
            </CustomButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}