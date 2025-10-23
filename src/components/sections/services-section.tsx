"use client";

import { Code, Search, Target, Server } from "lucide-react";
import { SERVICES } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-10">
              <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-blue-600"></span>
              <span className="text-xs sm:text-sm font-medium tracking-widest text-blue-600 uppercase">
                What We Do
              </span>
              <span className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-blue-600"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3f] mb-10 sm:mb-12 leading-tight max-w-4xl">
              Never Worry About Your Website{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Ever Again
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 bg-blue-500/20 rounded-sm"></span>
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto w-full" >
              <p className="text-sm sm:text-base md:text-lg leading-8 sm:leading-9 md:leading-10 font-light text-[#001f3f]/70" style={{ marginBottom: '24px' }}>
                At Poleris Digital, we specialize in small business web design and development for clients across the US and Canada.
              </p>
              <p className="text-sm sm:text-base leading-8 sm:leading-9 font-light text-[#001f3f]/70">
                Every line of code is handcrafted for optimal performance, ensuring Google loves your site, driving more traffic and revenue to your business.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center w-full mb-12 sm:mb-16" style={{ marginTop: '40px' }}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.id as keyof typeof ICON_MAP];

            return (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * index} duration={0.7}>
                <li className="group relative h-full">
                <div className="relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 transition-all duration-700 hover:border-blue-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,31,63,0.3)] hover:-translate-y-3 overflow-hidden">

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-100/0 group-hover:from-blue-50/80 group-hover:via-cyan-50/40 group-hover:to-blue-100/80 transition-all duration-700 rounded-3xl -z-10"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700"></div>

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
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#001f3f] text-center transition-colors duration-500 group-hover:text-blue-700 mb-3 sm:mb-4 md:mb-5 leading-tight px-2 sm:px-3 md:px-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-sm text-[#001f3f]/70 text-center transition-colors duration-500 group-hover:text-[#001f3f]/80 mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 sm:px-3 md:px-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-auto flex flex-col gap-2 sm:gap-2.5 md:gap-3 px-2 sm:px-3 md:px-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm md:text-sm text-[#001f3f]/80 transition-all duration-500 group-hover:text-[#001f3f] gap-2 sm:gap-2.5 md:gap-3">
                        <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-500 mt-0.5 sm:mt-1">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent corner */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700 blur-2xl"></div>

                  {/* Corner dot accent */}
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-all duration-500"></div>
                </div>
              </li>
              </ScrollReveal>
            );
          })}
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