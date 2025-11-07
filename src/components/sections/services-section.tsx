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
      <div className="relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 transition-all duration-700 hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,31,63,0.3)] dark:hover:shadow-[0_20px_70px_-15px_rgba(6,182,212,0.3)] hover:-translate-y-3 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-100/0 dark:from-blue-950/0 dark:via-cyan-950/0 dark:to-blue-900/0 group-hover:from-blue-50/80 group-hover:via-cyan-50/40 group-hover:to-blue-100/80 dark:group-hover:from-blue-950/80 dark:group-hover:via-cyan-950/40 dark:group-hover:to-blue-900/80 transition-all duration-700 rounded-3xl -z-10"></div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 dark:via-cyan-500/0 to-transparent group-hover:via-blue-500 dark:group-hover:via-cyan-500 transition-all duration-700"></div>

        {/* Icon Container */}
        <div className="relative inline-flex self-center mb-4 sm:mb-5 md:mb-6 mt-2 sm:mt-2">
          {/* Glow effect behind icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150"></div>

          {/* Icon */}
          <div className="relative flex justify-center items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#001f3f] via-[#002855] to-[#003d6b] h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-blue-600 shadow-xl group-hover:shadow-2xl">
            {IconComponent && (
              <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white relative z-10" strokeWidth={1.5} />
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-blue-700 dark:group-hover:text-cyan-400 mb-3 sm:mb-4 leading-tight px-2 sm:px-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-base text-[#001f3f]/70 dark:text-gray-300 text-center transition-colors duration-500 group-hover:text-[#001f3f]/80 dark:group-hover:text-gray-200 mb-5 sm:mb-6 leading-relaxed px-2 sm:px-3">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="mt-auto flex flex-col gap-3 sm:gap-3 px-2 sm:px-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm sm:text-base text-[#001f3f]/80 dark:text-gray-300 transition-all duration-500 group-hover:text-[#001f3f] dark:group-hover:text-white gap-2.5 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-blue-100 dark:bg-cyan-900 group-hover:bg-blue-500 dark:group-hover:bg-cyan-500 flex items-center justify-center transition-all duration-500 mt-0.5">
                <svg className="w-3 h-3 text-blue-600 dark:text-cyan-300 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed flex-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Bottom accent corner */}
        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700 blur-2xl"></div>

        {/* Corner dot accent */}
        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-10">
              <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-blue-600"></span>
              <span className="text-xs sm:text-sm font-medium tracking-widest text-blue-600 dark:text-cyan-400 uppercase">
                What We Do
              </span>
              <span className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-blue-600"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] dark:text-white mb-6 sm:mb-8 md:mb-10 leading-[1.1] max-w-4xl px-4 sm:px-0">
              Never Worry About Your Website{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Ever Again
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 bg-blue-500/20 dark:bg-cyan-500/20 rounded-sm"></span>
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto w-full px-4 sm:px-6" >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed font-light text-[#001f3f]/70 dark:text-gray-300">
                At Poleris Digital, we specialize in small business web design and development for clients across the US and Canada. Every line of code is handcrafted for optimal performance, ensuring Google loves your site and drives more traffic to your business.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Services Display - Swipeable on Mobile, Grid on Desktop */}
        <div className="flex justify-center w-full mb-20 sm:mb-16 pb-4 sm:pb-0" style={{ marginTop: '40px' }}>
          {/* Mobile Swipeable Cards - Hidden on SM and above */}
          <div className="sm:hidden w-full max-w-md mx-auto">
            <SwipeableCards showControls={false}>
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Grid - Hidden on mobile, visible from SM and above */}
          <ul className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * index} duration={0.7}>
                <li className="h-full">
                  <ServiceCard service={service} />
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <ScrollReveal direction="zoom-in" delay={0.4}>
          <div className="flex justify-center" style={{ marginTop: '48px' }}>
            <div className="relative group/cta">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover/cta:opacity-40 transition-all duration-500"></div>
              <CustomButton href="#contact" variant="primary" size="lg">
                Get Started Today
              </CustomButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}