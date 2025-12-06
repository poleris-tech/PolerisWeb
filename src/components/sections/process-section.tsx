"use client";

import React from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/constants/site-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { SwipeableCards } from "@/components/ui/swipeable-cards";

// Fluent UI Icon paths mapping for each process step
const PROCESS_ICON_PATHS: Record<string, string> = {
  "plan": "https://api.iconify.design/fluent/lightbulb-24-filled.svg?color=%234A90E2",
  "design": "https://api.iconify.design/fluent/design-ideas-24-filled.svg?color=%234A90E2",
  "develop": "https://api.iconify.design/fluent/code-24-filled.svg?color=%234A90E2",
  "launch": "https://api.iconify.design/fluent/rocket-24-filled.svg?color=%234A90E2",
};

// Process Icon Component - Displays Fluent UI icons
function ProcessIcon({ stepId }: { stepId: string }): React.ReactNode {
  const iconPath = PROCESS_ICON_PATHS[stepId];

  if (!iconPath) return null;

  return (
    <Image
      src={iconPath}
      alt={`${stepId} process step icon`}
      width={64}
      height={64}
      className="w-full h-full object-contain"
      unoptimized
    />
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <div className="absolute inset-0 pointer-events-none">
  <Starfield count={30} />
</div>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Process
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500 dark:to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              A Proven Approach to{" "}
              <span className="text-cyan-500 dark:text-cyan-400">Success</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-[#001f3f]/70 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a streamlined process designed to deliver exceptional websites on time and on budget.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Layout - Two Column on Desktop */}
        <div className="flex justify-center w-full mb-8">
          {/* Mobile Swipeable Cards - Hidden on MD and above */}
          <div className="md:hidden w-full max-w-md mx-auto">
            <SwipeableCards showControls={false}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="group relative h-full">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/30 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/20 dark:via-[#FDF2DB]/20 dark:to-[#E6D9CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Main Card Container */}
                  <div className="relative flex flex-col h-full rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-[#4A90E2] dark:group-hover:border-[#4A90E2] transition-all duration-300 shadow-sm [box-shadow:0px_0px_0px_transparent] group-hover:[box-shadow:6px_6px_0px_#4A90E2] group-hover:-translate-x-1 group-hover:-translate-y-1 p-6 sm:p-8">

                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/20 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/10 dark:via-[#FDF2DB]/5 dark:to-[#E6D9CC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-6">
                        <div className="transition-transform duration-700 ease-out group-hover:scale-110 w-20 h-20 sm:w-24 sm:h-24">
                          <ProcessIcon stepId={step.id} />
                        </div>
                      </div>

                      <h3 className="text-[18px] md:text-[20px] font-black text-[#001f3f] dark:text-white text-center transition-colors duration-300 group-hover:text-[#8B7355] dark:group-hover:text-[#FDF4E3] mb-4 leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-[13px] md:text-[14px] text-[#001f3f]/80 dark:text-gray-300 text-center leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Two Column Layout - Hidden on mobile, visible from MD and above */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 xl:gap-12 max-w-7xl mx-auto w-full items-center">

            {/* Left Column - Large Illustration */}
            <ScrollReveal direction="left" delay={0.1} duration={0.8}>
              <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl">
                {/* Custom Process Illustration - Replace the src path with your SVG file */}
                <img
                  src="/illustrations/process.svg"
                  alt="Process flow diagram"
                  className="w-full h-full max-w-lg object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Right Column - 2x2 Grid of Process Cards */}
            <div className="grid grid-cols-2 gap-4 xl:gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <ScrollReveal key={step.id} direction="right" delay={0.1 * (index + 1)} duration={0.6}>
                  <div className="group relative h-full">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/30 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/20 dark:via-[#FDF2DB]/20 dark:to-[#E6D9CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    {/* Main Card Container */}
                    <div className="relative flex flex-col h-full rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-[#4A90E2] dark:group-hover:border-[#4A90E2] transition-all duration-300 shadow-sm [box-shadow:0px_0px_0px_transparent] group-hover:[box-shadow:6px_6px_0px_#4A90E2] group-hover:-translate-x-1 group-hover:-translate-y-1 p-4 xl:p-6">

                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FDF4E3]/30 via-[#FDF2DB]/20 to-[#E6D9CC]/30 dark:from-[#FDF4E3]/10 dark:via-[#FDF2DB]/5 dark:to-[#E6D9CC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon Container */}
                        <div className="flex justify-center mb-4">
                          <div className="transition-transform duration-700 ease-out group-hover:scale-110 w-16 h-16 xl:w-20 xl:h-20">
                            <ProcessIcon stepId={step.id} />
                          </div>
                        </div>

                        <h3 className="text-[16px] xl:text-[18px] font-black text-[#001f3f] dark:text-white text-center transition-colors duration-300 group-hover:text-[#8B7355] dark:group-hover:text-[#FDF4E3] mb-3 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-[12px] xl:text-[13px] text-[#001f3f]/80 dark:text-gray-300 text-center leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <ScrollReveal direction="zoom-in" delay={0.5}>
          <div className="mt-12 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}