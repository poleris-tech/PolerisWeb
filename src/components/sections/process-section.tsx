"use client";

import React from "react";
import { PROCESS_STEPS } from "@/constants/site-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";

const ICONS = {
  plan: "https://api.iconify.design/fluent/lightbulb-24-filled.svg?color=%234A90E2",
  design: "https://api.iconify.design/fluent/design-ideas-24-filled.svg?color=%234A90E2",
  develop: "https://api.iconify.design/fluent/code-24-filled.svg?color=%234A90E2",
  launch: "https://api.iconify.design/fluent/rocket-24-filled.svg?color=%234A90E2",
};

function ProcessIcon({ id }: { id: string }) {
  return (
    <img src={ICONS[id as keyof typeof ICONS]} alt="" className="w-14 h-14 object-contain" 
     />
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-24 bg-white dark:bg-gray-950 overflow-hidden
                 -mt-12 md:-mt-20"   // This pulls it up beautifully
    >
      <Starfield count={30} />

      <div className="container mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
              How We Deliver Results
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A clear, proven path from idea to launch — every time.
            </p>
          </ScrollReveal>
        </div>

       {/* MOBILE – Perfect spacing, zero edge-touch */}
        <div className="md:hidden">
          <div className="space-y-20"> {/* increased vertical spacing */}
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.id} direction="up" delay={i * 0.1}>
                {/* This wrapper forces 32px left + 32px right safe zone */}
                <div className="px-8"> {/* ← 32px on each side (perfect for phones) */}
                  <div className="relative flex gap-7">
                    {/* Icon + dot */}
                    <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90E2]/10 to-blue-500/10 border-2 border-[#4A90E2]/20 flex items-center justify-center z-10">
                      <ProcessIcon id={step.id} />
                    </div>

                    {/* Card – now has generous internal padding */}
                    <div className="relative flex-1 bg-[#fafafa] dark:bg-gray-800 rounded-2xl p-7 shadow-lg border border-gray-200 dark:border-gray-700 z-10"
                         style={{
                           backgroundImage: 'none',
                         }}>
                      <h3 className="text-xl font-bold text-[#001f3f] dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting line (only between items) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-16 top-20 w-0.5 h-24 bg-gradient-to-b from-[#4A90E2]/30 to-transparent -z-10" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Desktop: Big Illustration + Clean 2×2 Grid (NO PATH) */}
        <div className="hidden md:grid lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Large, beautiful illustration */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <img
                src="/illustrations/process.svg"
                alt="Our development process"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </ScrollReveal>

          {/* Right: Perfectly aligned 2×2 cards */}
          <div className="grid grid-cols-2 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.id} direction="right" delay={0.15 + i * 0.1}>
                <div className="group relative h-full bg-[#fafafa] dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#4A90E2]/50 hover:shadow-xl transition-all duration-300 flex flex-col z-10"
                     style={{
                       backgroundImage: 'none',
                     }}>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#4A90E2]/10 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ProcessIcon id={step.id} />
                  </div>
                  <h3 className="text-xl font-bold text-center text-[#001f3f] dark:text-white mb-3 group-hover:text-[#4A90E2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-center text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}