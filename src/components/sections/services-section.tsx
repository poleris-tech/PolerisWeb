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
  "web-design": "https://api.iconify.design/fluent/code-24-filled.svg?color=%234A90E2",
  "seo": "https://api.iconify.design/fluent/search-24-filled.svg?color=%234A90E2",
  "ppc": "https://api.iconify.design/fluent/target-arrow-24-filled.svg?color=%234A90E2",
  "hosting": "https://api.iconify.design/fluent/server-24-filled.svg?color=%234A90E2",
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
      className="group relative h-full flex flex-col rounded-2xl transition-all duration-500 overflow-hidden"
      style={{
        animation: `reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        opacity: 0,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Gradient Border Effect - Always visible with subtle glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#4A90E2]/10 via-[#3B82F6]/10 to-[#2563EB]/10 dark:from-[#4A90E2]/20 dark:via-[#3B82F6]/20 dark:to-[#2563EB]/20 group-hover:from-[#4A90E2]/30 group-hover:via-[#3B82F6]/30 group-hover:to-[#2563EB]/30 dark:group-hover:from-[#4A90E2]/40 dark:group-hover:via-[#3B82F6]/40 dark:group-hover:to-[#2563EB]/40 transition-all duration-500 blur-xl"></div>

      {/* Main Card Container - Visible shadow and colorful border by default */}
      <div className="relative h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-gray-900 backdrop-blur-xl border-2 border-[#4A90E2]/30 dark:border-[#4A90E2]/40 group-hover:border-[#4A90E2] dark:group-hover:border-[#4A90E2] transition-all duration-300 shadow-xl group-hover:shadow-2xl [box-shadow:4px_4px_0px_rgba(74,144,226,0.2)] group-hover:[box-shadow:8px_8px_0px_#4A90E2] group-hover:-translate-x-2 group-hover:-translate-y-2">

        {/* Animated Background Gradient - Visible by default */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A90E2]/3 via-[#3B82F6]/3 to-[#2563EB]/3 dark:from-[#4A90E2]/5 dark:via-[#3B82F6]/5 dark:to-[#2563EB]/5 group-hover:from-[#4A90E2]/10 group-hover:via-[#3B82F6]/10 group-hover:to-[#2563EB]/10 dark:group-hover:from-[#4A90E2]/15 dark:group-hover:via-[#3B82F6]/15 dark:group-hover:to-[#2563EB]/15 transition-all duration-500"></div>

        {/* Corner accent - subtle by default */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4A90E2]/5 to-transparent group-hover:from-[#4A90E2]/15 rounded-tr-2xl transition-all duration-300"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-3 sm:px-2 md:px-0">
          {/* Icon Container - Always visible background */}
          <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
            <div className="relative">
              {/* Icon background glow - subtle by default */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/10 to-[#3B82F6]/10 rounded-full blur-lg group-hover:from-[#4A90E2]/30 group-hover:to-[#3B82F6]/30 group-hover:blur-xl transition-all duration-500"></div>

              <div className="relative transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#4A90E2]/5 to-[#3B82F6]/5 dark:from-[#4A90E2]/10 dark:to-[#3B82F6]/10 group-hover:from-[#4A90E2]/15 group-hover:to-[#3B82F6]/15 p-3 sm:p-4 shadow-md group-hover:shadow-xl border border-[#4A90E2]/20 group-hover:border-[#4A90E2]/40">
                <ServiceIcon serviceId={service.id} />
              </div>
            </div>
          </div>

          {/* Title - More prominent with subtle gradient always */}
          <h3 className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-5 text-center transition-all duration-300 leading-tight [text-shadow:0_0_20px_rgba(74,144,226,0.1)] group-hover:bg-gradient-to-r group-hover:from-[#4A90E2] group-hover:to-[#3B82F6] group-hover:bg-clip-text group-hover:text-transparent group-hover:[text-shadow:none]">
            {service.title}
          </h3>

          {/* Features List - Improved styling */}
          <ul className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 text-xs sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#001f3f]/80 dark:text-gray-300 flex-grow mb-5 sm:mb-6">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                style={{
                  animation: `fade-in 0.4s ease-out forwards`,
                  animationDelay: `${index * 0.1 + idx * 0.05}s`,
                  opacity: 0,
                }}
              >
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#3B82F6] flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-sm">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="leading-relaxed group-hover/item:text-[#4A90E2] dark:group-hover/item:text-[#4A90E2] transition-colors duration-300 font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Learn More Link - Button style always visible */}
          <div className="relative group/button">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#3B82F6] rounded-lg opacity-5 group-hover:opacity-15 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-bold text-[#4A90E2] dark:text-[#4A90E2] group-hover:text-[#3B82F6] dark:group-hover:text-[#3B82F6] transition-all duration-300 py-2.5 px-4 rounded-lg border-2 border-[#4A90E2]/20 group-hover:border-[#4A90E2]/40 shadow-sm group-hover:shadow-md">
              <span>Learn More</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
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

      <div className="container mx-auto px-6 sm:px-6 md:px-8 lg:px-12">
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
            <div className="max-w-3xl mx-auto w-full">
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
          <div className="sm:hidden w-full max-w-md mx-auto px-4">
            <SwipeableCards showControls={false} showDots={false}>
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Grid - Hidden on mobile, visible from SM and above */}
          <ul className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl w-full px-4 sm:px-0">
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