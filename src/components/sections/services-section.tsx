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
      <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:from-gray-800 dark:hover:to-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:translate-x-[-8px] hover:translate-y-[-8px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:8px_8px_0px_rgb(99,102,241)] dark:hover:[box-shadow:8px_8px_0px_rgb(34,211,238)]">

        {/* Icon Container - Clean and modern */}
        <div className="relative inline-flex self-center mb-6">
          <div className="relative flex justify-center items-center rounded-2xl bg-indigo-500 dark:bg-cyan-500 h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 dark:group-hover:shadow-cyan-500/40">
            {IconComponent && (
              <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
            )}
          </div>
        </div>

        {/* Title - H3 Section: 18-20px mobile, 24-28px desktop */}
        <h3 className="text-[18px] md:text-[24px] font-black text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-5 leading-[1.4] md:leading-[1.3]">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-700 mx-auto mb-5 transition-all duration-500 group-hover:w-full group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400"></div>

        {/* Features List - Body Text: 16px mobile, 18px desktop */}
        <ul className="mt-auto flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-base md:text-lg text-[#001f3f]/80 dark:text-gray-300 transition-all duration-500 group-hover:text-[#001f3f] dark:group-hover:text-white gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-cyan-500/10 group-hover:bg-indigo-500 dark:group-hover:bg-cyan-500 flex items-center justify-center transition-all duration-500 mt-0.5">
                <svg className="w-3 h-3 text-indigo-500 dark:text-cyan-400 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-[1.5] md:leading-[1.6] flex-1 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Floating accent elements */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-300/40 dark:bg-cyan-400/20 opacity-50 group-hover:opacity-100 group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-500"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-indigo-300/40 dark:bg-cyan-400/20 opacity-50 group-hover:opacity-100 group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white dark:bg-gray-950 overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content - Typography Standards */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Services
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500 dark:to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              Everything You Need to{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                Dominate Online
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18-20px desktop */}
            <div className="max-w-3xl mx-auto w-full">
              <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-[#001f3f]/70 dark:text-gray-300">
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
          <div className="flex justify-center mt-12 md:mt-16">
            <CustomButton
              href="#contact"
              variant="comic"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4"
            >
              Get Started Today
            </CustomButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}