"use client";

import React from "react";
import { Code, Search, Target, Server } from "lucide-react";
import { SERVICES } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SwipeableCards } from "@/components/ui/swipeable-cards";
import { Starfield } from "@/components/ui/starfield";
import { motion } from "framer-motion";

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

// Service Illustrations - Custom SVG for each service
function ServiceIllustration({ serviceId }: { serviceId: string }): React.ReactNode {
  const illustrations: Record<string, React.ReactNode> = {
    "web-design": (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Web design service icon">
        <motion.rect x="20" y="25" width="80" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.line x1="20" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="2.5" />
        <motion.circle cx="35" cy="32" r="3" fill="currentColor" />
        <motion.circle cx="45" cy="32" r="3" fill="currentColor" />
        <motion.circle cx="55" cy="32" r="3" fill="currentColor" />
        <motion.rect x="30" y="50" width="60" height="35" rx="2" fill="currentColor" opacity="0.15" animate={{ opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.line x1="30" y1="62" x2="90" y2="62" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <motion.line x1="30" y1="72" x2="90" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    "seo": (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="SEO service icon">
        <motion.circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
        <motion.text x="60" y="68" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">SEO</motion.text>
        <motion.circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" animate={{ r: [45, 55, 45] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    ),
    "ppc": (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="PPC advertising service icon">
        <motion.path d="M 30 80 Q 60 30, 90 80" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.circle cx="30" cy="80" r="4" fill="currentColor" />
        <motion.circle cx="60" cy="30" r="4" fill="currentColor" />
        <motion.circle cx="90" cy="80" r="4" fill="currentColor" />
        <motion.circle cx="60" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" animate={{ r: [8, 12, 8] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.rect x="35" y="85" width="50" height="15" rx="2" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    "hosting": (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Hosting service icon">
        <motion.rect x="25" y="30" width="70" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.line x1="25" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <motion.line x1="25" y1="65" x2="95" y2="65" stroke="currentColor" strokeWidth="1.5" />
        <motion.circle cx="40" cy="42" r="2.5" fill="currentColor" animate={{ fill: ["currentColor", "none", "currentColor"] }} transition={{ duration: 1, repeat: Infinity }} />
        <motion.circle cx="55" cy="42" r="2.5" fill="currentColor" animate={{ fill: ["currentColor", "currentColor", "none"] }} transition={{ duration: 1, repeat: Infinity }} />
        <motion.circle cx="70" cy="42" r="2.5" fill="currentColor" animate={{ fill: ["none", "currentColor", "currentColor"] }} transition={{ duration: 1, repeat: Infinity }} />
      </svg>
    ),
  };

  return illustrations[serviceId] || null;
}

// Service Card Component for reuse in both grid and swipeable views
function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className="group relative h-full">
      {/* Clean card with hover-reveal shadow */}
      <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:translate-x-[-8px] hover:translate-y-[-8px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:8px_8px_0px_rgb(99,102,241)] dark:hover:[box-shadow:8px_8px_0px_rgb(34,211,238)]">

        {/* Custom SVG Illustration Container */}
        <div className="relative inline-flex self-center mb-6">
          <div className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 dark:group-hover:shadow-cyan-500/40 text-white">
            <ServiceIllustration serviceId={service.id} />
          </div>
        </div>

        {/* Title - H3 Section: 18-20px mobile, 24-28px desktop */}
        <h3 className="text-[18px] md:text-[24px] font-black text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-5 leading-[1.4] md:leading-[1.3]">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-700 mx-auto mb-5 transition-all duration-500 group-hover:w-full group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400"></div>

        {/* Benefits Description - Brief benefit statement */}
        <p className="text-sm md:text-base text-[#001f3f]/70 dark:text-gray-400 text-center mb-5 min-h-[2.5rem] transition-colors duration-500 group-hover:text-[#001f3f] dark:group-hover:text-cyan-300">
          Build authority, increase conversions, and grow your business faster.
        </p>

        {/* Features List - Body Text: 16px mobile, 18px desktop */}
        <ul className="mt-auto flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-base md:text-lg text-[#001f3f]/80 dark:text-gray-300 transition-all duration-500 group-hover:text-[#001f3f] dark:group-hover:text-white gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-cyan-500/10 group-hover:bg-indigo-500 dark:group-hover:bg-cyan-500 flex items-center justify-center transition-all duration-500 mt-0.5">
                <svg className="w-3 h-3 text-indigo-500 dark:text-cyan-400 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
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

        {/* Key Benefits Overview - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8 mb-16 sm:mb-20 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.1} duration={0.6}>
            <div className="text-center p-6 rounded-xl bg-indigo-50/50 dark:bg-cyan-500/5 border border-indigo-200 dark:border-cyan-500/20 hover:border-indigo-500 dark:hover:border-cyan-400 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-2">100%</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">Custom Code</p>
              <p className="text-xs md:text-sm text-[#001f3f]/60 dark:text-gray-400 mt-1">No templates, just your vision</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} duration={0.6}>
            <div className="text-center p-6 rounded-xl bg-indigo-50/50 dark:bg-cyan-500/5 border border-indigo-200 dark:border-cyan-500/20 hover:border-indigo-500 dark:hover:border-cyan-400 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-2">2-3x</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">Faster Load</p>
              <p className="text-xs md:text-sm text-[#001f3f]/60 dark:text-gray-400 mt-1">vs typical WordPress sites</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} duration={0.6}>
            <div className="text-center p-6 rounded-xl bg-indigo-50/50 dark:bg-cyan-500/5 border border-indigo-200 dark:border-cyan-500/20 hover:border-indigo-500 dark:hover:border-cyan-400 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-cyan-400 mb-2">Top 1%</div>
              <p className="text-sm md:text-base font-semibold text-[#001f3f] dark:text-white">SEO Ready</p>
              <p className="text-xs md:text-sm text-[#001f3f]/60 dark:text-gray-400 mt-1">Optimized for rankings</p>
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