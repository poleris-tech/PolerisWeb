"use client";

import React from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/constants/site-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { SwipeableCards } from "@/components/ui/swipeable-cards";

// Fluent UI Icon paths mapping for each process step
const PROCESS_ICON_PATHS: Record<string, string> = {
  "plan": "https://api.iconify.design/fluent/lightbulb-24-filled.svg?color=%23ffffff",
  "design": "https://api.iconify.design/fluent/design-ideas-24-filled.svg?color=%23ffffff",
  "develop": "https://api.iconify.design/fluent/code-24-filled.svg?color=%23ffffff",
  "launch": "https://api.iconify.design/fluent/rocket-24-filled.svg?color=%23ffffff",
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
                  <div className="relative flex flex-col h-full rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-5 sm:p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:translate-x-[-6px] hover:translate-y-[-6px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:6px_6px_0px_rgb(99,102,241)] dark:hover:[box-shadow:6px_6px_0px_rgb(34,211,238)]">

                    {/* Icon Container */}
                    <div className="relative inline-flex self-center mb-4">
                      <div className="relative flex justify-center items-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-16 w-16 sm:h-20 sm:w-20 shadow-md shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-indigo-500/30 dark:group-hover:shadow-cyan-500/30 p-3">
                        <ProcessIcon stepId={step.id} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-3 leading-tight">
                      {step.title}
                    </h3>

                    <div className="w-12 h-[1.5px] bg-gray-200 dark:bg-gray-700 mx-auto mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400"></div>

                    <p className="text-[13px] text-[#001f3f]/70 dark:text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
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
                    <div className="relative flex flex-col h-full rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-4 xl:p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:translate-x-[-6px] hover:translate-y-[-6px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:6px_6px_0px_rgb(99,102,241)] dark:hover:[box-shadow:6px_6px_0px_rgb(34,211,238)]">

                      {/* Icon Container */}
                      <div className="relative inline-flex self-center mb-3">
                        <div className="relative flex justify-center items-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-14 w-14 xl:h-16 xl:w-16 shadow-md shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-indigo-500/30 dark:group-hover:shadow-cyan-500/30 p-3">
                          <ProcessIcon stepId={step.id} />
                        </div>
                      </div>

                      <h3 className="text-[15px] xl:text-[16px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-2 leading-tight">
                        {step.title}
                      </h3>

                      <div className="w-8 h-[1.5px] bg-gray-200 dark:bg-gray-700 mx-auto mb-3 transition-all duration-500 group-hover:w-full group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400"></div>

                      <p className="text-[12px] xl:text-[13px] text-[#001f3f]/70 dark:text-gray-300 text-center leading-relaxed transition-colors duration-500 group-hover:text-[#001f3f] dark:group-hover:text-gray-100">
                        {step.description}
                      </p>
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