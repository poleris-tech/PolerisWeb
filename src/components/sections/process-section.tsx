"use client";

import { PROCESS_STEPS } from "@/constants/site-data";
import { ArrowRight, Lightbulb, Palette, Code, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";

const ICON_MAP = {
  "Lightbulb": Lightbulb,
  "Palette": Palette,
  "Code": Code,
  "Rocket": Rocket,
};

/**
 * Process Section Component
 * Displays the 4-step process for web development with clean design matching the site theme
 */

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header Content - Typography Standards */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Process
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500 dark:to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              A Proven Approach to{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                Success
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18-20px desktop */}
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-[#001f3f]/70 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a streamlined process designed to deliver exceptional websites on time and on budget.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative px-4 sm:px-0">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/50 dark:via-cyan-400/50 to-transparent" style={{ top: '80px' }}></div>

          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.id} direction="up" delay={0.1 * index} duration={0.7}>
              <div className="group relative h-full">
              <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:translate-x-[-8px] hover:translate-y-[-8px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:8px_8px_0px_rgb(99,102,241)] dark:hover:[box-shadow:8px_8px_0px_rgb(34,211,238)] overflow-hidden">

                {/* Icon with Number Badge */}
                <div className="relative inline-flex self-center mb-6">
                  {/* Main icon circle */}
                  <div className="relative flex justify-center items-center rounded-2xl bg-indigo-500 dark:bg-cyan-500 h-20 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 dark:group-hover:shadow-cyan-500/40">
                    {step.icon && ICON_MAP[step.icon as keyof typeof ICON_MAP] && (() => {
                      const IconComponent = ICON_MAP[step.icon as keyof typeof ICON_MAP];
                      return <IconComponent className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />;
                    })()}
                  </div>

                  {/* Small number badge in top-right corner */}
                  <div className="absolute -top-1 -right-1 flex justify-center items-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-cyan-500 h-7 w-7 shadow-md transition-all duration-500 group-hover:scale-110">
                    <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400">{step.number}</span>
                  </div>
                </div>

                {/* Arrow between steps - desktop only */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-20 z-20">
                    <ArrowRight className="h-6 w-6 text-indigo-500 dark:text-cyan-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-500" strokeWidth={2} />
                  </div>
                )}

                {/* Title - H3 Section: 18-20px mobile, 24-28px desktop */}
                <h3 className="text-[18px] md:text-[24px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-4 leading-[1.4] md:leading-[1.3]">
                  {step.title}
                </h3>

                {/* Description - Body Text: 16px mobile, 18px desktop */}
                <p className="text-base md:text-lg text-[#001f3f]/70 dark:text-gray-300 text-center transition-colors duration-500 leading-[1.5] md:leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
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
