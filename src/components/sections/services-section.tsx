"use client";

import React from "react";
import Image from "next/image";
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

// Custom Icon paths mapping for each service
// Using Fluent UI icons from Microsoft
const ICON_PATHS: Record<string, string> = {
  "web-design": "https://api.iconify.design/fluent/code-24-filled.svg?color=%23ffffff",
  "seo": "https://api.iconify.design/fluent/search-24-filled.svg?color=%23ffffff",
  "ppc": "https://api.iconify.design/fluent/target-arrow-24-filled.svg?color=%23ffffff",
  "hosting": "https://api.iconify.design/fluent/server-24-filled.svg?color=%23ffffff",
};

// Service Icon Component - Displays custom uploaded icons
function ServiceIcon({ serviceId }: { serviceId: string }): React.ReactNode {
  const iconPath = ICON_PATHS[serviceId];

  if (!iconPath) return null;

  return (
    <Image
      src={iconPath}
      alt={`${serviceId} service icon`}
      width={96}
      height={96}
      className="w-full h-full object-contain"
      priority
      unoptimized
    />
  );
}

// Service Card Component for reuse in both grid and swipeable views
function ServiceCard({ service, index = 0 }: { service: typeof SERVICES[0]; index?: number }) {
  return (
    <a
      href={`/${service.id}`}
      className="group relative h-full flex flex-col p-8 md:p-10 rounded-2xl transition-all duration-500 bg-indigo-500/3 dark:bg-cyan-500/3 backdrop-blur-sm hover:bg-indigo-500/8 dark:hover:bg-cyan-500/8 overflow-hidden block border border-indigo-500/10 dark:border-cyan-500/10 hover:border-indigo-500/30 dark:hover:border-cyan-500/30 hover:shadow-lg hover:-translate-y-1"
      style={{
        animation: `reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        opacity: 0,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Icon Container - Centered, Visible */}
      <div className="flex justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <div className="flex justify-center items-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 p-4">
          <ServiceIcon serviceId={service.id} />
        </div>
      </div>

      {/* Title - Centered */}
      <h3 className="text-[16px] md:text-[18px] font-bold text-[#001f3f] dark:text-white mb-3 md:mb-4 text-center">
        {service.title}
      </h3>

      {/* Features List - Left Aligned */}
      <ul className="flex flex-col gap-2 md:gap-2.5 text-[12px] md:text-[13px] text-[#001f3f]/75 dark:text-gray-300 flex-grow">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <svg className="w-3 h-3 text-indigo-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      <span className="mt-6 inline-block text-sm font-semibold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
        Learn More →
      </span>
    </a>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white dark:bg-gray-950 overflow-hidden py-16 sm:py-20 md:py-32 lg:py-40"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content - Typography Standards */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 12px mobile, 14px tablet, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-5 md:mb-6">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400"></span>
              <span className="text-xs md:text-sm lg:text-base font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase letter-spacing-wider">
                Our Services
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500 dark:to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 28-32px mobile, 36-42px tablet, 48px desktop */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-black text-[#001f3f] dark:text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.15] max-w-5xl tracking-[-0.5px]">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 dark:from-cyan-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                Dominate Online
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 14px mobile, 16px tablet, 18px desktop with improved readability */}
            <div className="max-w-3xl mx-auto w-full px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg leading-[1.6] md:leading-[1.7] font-normal text-[#001f3f]/75 dark:text-gray-300">
                Hand-coded websites designed for <span className="font-semibold text-[#001f3f] dark:text-white">speed</span>, <span className="font-semibold text-[#001f3f] dark:text-white">SEO</span>, and <span className="font-semibold text-[#001f3f] dark:text-white">conversions</span>. No WordPress, no page builders—just pure, blazing-fast performance.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Benefits Overview - Simplified and compact */}
        {/* <div className="hidden md:flex justify-center gap-8 md:gap-12 mb-16 md:mb-20 max-w-4xl mx-auto px-4">
          <ScrollReveal direction="up" delay={0.1} duration={0.5}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-1">100%</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">Custom Code</p>
            </div>
          </ScrollReveal>
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-700"></div>
          <ScrollReveal direction="up" delay={0.15} duration={0.5}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-1">2-3x</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">Faster Load</p>
            </div>
          </ScrollReveal>
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-700"></div>
          <ScrollReveal direction="up" delay={0.2} duration={0.5}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-1">Top 1%</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">SEO Ready</p>
            </div>
          </ScrollReveal>
        </div> */}

        {/* Services Display - Swipeable on Mobile, Grid on Desktop */}
        <div className="flex justify-center w-full mb-16 sm:mb-20">
          {/* Mobile Swipeable Cards - Hidden on SM and above */}
          <div className="sm:hidden w-full max-w-md mx-auto">
            <SwipeableCards showControls={false}>
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Grid - Hidden on mobile, visible from SM and above */}
          <ul className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl w-full">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * index} duration={0.6}>
                <li className="h-full">
                  <ServiceCard service={service} index={index} />
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