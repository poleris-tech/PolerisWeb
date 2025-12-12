// ServicesSection.tsx – Best-Practice Typography Edition (2025)

"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SwipeableCards } from "@/components/ui/swipeable-cards";
import { Starfield } from "@/components/ui/starfield";
import { ArrowRight } from "lucide-react";

const ICON_PATHS: Record<string, string> = {
  "web-design": "https://api.iconify.design/fluent:code-24-filled.svg?color=%234A90E2",
  "ppc": "https://api.iconify.design/fluent:target-arrow-24-filled.svg?color=%234A90E2",
  "seo": "https://api.iconify.design/fluent:search-visual-24-filled.svg?color=%234A90E2",
  "hosting": "https://api.iconify.design/fluent:cloud-24-filled.svg?color=%234A90E2",
};

function ServiceIcon({ serviceId }: { serviceId: string }) {
  const iconUrl = ICON_PATHS[serviceId] ?? ICON_PATHS["web-design"];

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-900 border border-blue-200 dark:border-blue-900 shadow-lg shadow-blue-500/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/10">
      <img src={iconUrl} alt="" className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-sm" loading="lazy" />
      <div className="absolute inset-0 rounded-2xl ring-4 ring-blue-400/0 group-hover:ring-blue-400/20 transition-all duration-500" />
    </div>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <Link
      href={`/${service.id}`}
      className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 hover:border-[#4A90E2] hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <ServiceIcon serviceId={service.id} />

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] dark:text-white mb-2 group-hover:text-[#4A90E2] transition-colors">
            {service.title}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {service.features[0]}
          </p>
          <span className="text-[#4A90E2] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 md:px-8">

        {/* Header – Elegant & Confident */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
              Our Services
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We build fast, beautiful websites and run smart campaigns that grow your business.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: Simple 2×2 Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} direction="up" delay={i * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: Clean Swipe */}
        <div className="sm:hidden">
          <SwipeableCards showDots>
            {SERVICES.map((service) => (
              <div key={service.id} className="px-2">
                <ServiceCard service={service} />
              </div>
            ))}
          </SwipeableCards>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <ScrollReveal direction="up" delay={0.4}>
            <CustomButton
              href="#contact"
              variant="comic"
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Get Started
            </CustomButton>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}