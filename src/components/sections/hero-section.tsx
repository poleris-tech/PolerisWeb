"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Starfield } from "@/components/ui/starfield";
import { Parallax } from "@/components/ui/parallax";

/**
 * Hero Section Component
 * Main landing section with space-themed animations and CTA
 */

export function HeroSection() {
  return (
    <section className="hero-section relative w-full max-w-full bg-gradient-to-br from-[#0a0d1a] via-[#0f1629] to-[#001f3d] dark:from-[#050711] dark:via-[#0a0d1a] dark:to-[#001529] text-white overflow-x-hidden overflow-y-visible min-h-[85svh] sm:min-h-[90svh] md:min-h-[95svh] lg:min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24">
      {/* Starfield with Parallax - Only visible in dark mode */}
      <Parallax speed={0.15} direction="down">
        <Starfield count={150} position="absolute" />
      </Parallax>

      {/* Animated Gradient Blobs with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blob 1 - Deep Blue - Slow parallax */}
        <Parallax speed={0.3} direction="down">
          <div
            className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-30 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 50%, transparent 100%)',
              top: '10%',
              left: '10%',
              animation: 'float-blob-1 20s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 2 - Cyan - Medium parallax */}
        <Parallax speed={0.5} direction="up">
          <div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(103, 232, 249, 0.3) 50%, transparent 100%)',
              top: '50%',
              right: '5%',
              animation: 'float-blob-2 25s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 3 - Indigo accent - Fast parallax */}
        <Parallax speed={0.7} direction="down">
          <div
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(129, 140, 248, 0.5) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
              bottom: '20%',
              left: '30%',
              animation: 'float-blob-3 30s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 4 - Cyan accent - Medium parallax */}
        <Parallax speed={0.4} direction="up">
          <div
            className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full opacity-15 blur-[90px]"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%)',
              top: '60%',
              right: '40%',
              animation: 'float-blob-4 22s ease-in-out infinite',
            }}
          ></div>
        </Parallax>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* White background layer */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-white dark:bg-gray-950 z-[5] border-none shadow-none"></div>

      {/* Wave SVG at bottom - Responsive height */}
      <svg
        className="cs-wave absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none origin-bottom scale-y-75 sm:scale-y-90 md:scale-y-100"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1920 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z"
          className="fill-white dark:fill-gray-950"
          stroke="none"
        />
      </svg>

      <div className="container relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full">

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[52%] xl:w-[50%] flex-shrink-0">

            {/* Topper - Caption Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 mb-4 md:mb-5"
              style={{ willChange: 'opacity, transform' }}
            >
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-400 uppercase">
                Custom Designs, Custom Coded
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-400"></span>
            </motion.div>

            {/* Main heading - H1 Standards: Mobile 28-32px, Desktop 42-48px */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 md:space-y-6"
              style={{ willChange: 'opacity, transform' }}
            >
              <h1 className="text-[32px] leading-[1.25] md:text-[42px] lg:text-[48px] md:leading-[1.1] font-black text-white">
                Fast Websites,
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h1>

              {/* Body Text - Mobile 16px, Desktop 18-20px */}
              <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] text-white/80 font-light max-w-xl mx-auto lg:mx-0">
                Hand-coded for speed. Optimized for results. Build your perfect website with cutting-edge technology and expert craftsmanship.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 md:mt-10"
              style={{ willChange: 'opacity, transform' }}
            >
              <CustomButton
                href="#contact"
                variant="comic"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </CustomButton>
              <CustomButton
                href="#services"
                variant="comic"
                size="lg"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white/50 hover:border-white/80 text-white text-base md:text-lg px-8 md:px-10 py-4 backdrop-blur-sm [box-shadow:3px_3px_0px_rgba(255,255,255,0.3)] hover:[box-shadow:3px_3px_0px_rgba(255,255,255,0.5)]"
              >
                View Services
              </CustomButton>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 md:mt-10 flex items-center gap-3 text-sm text-white/70"
              style={{ willChange: 'opacity' }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">100% Custom Code &bull; No Templates</span>
            </motion.div>
          </div>

          {/* Laptop Image - Shown on tablet+ with Parallax */}
          <Parallax speed={0.2} direction="up" className="hidden md:block md:w-[45%] lg:w-[45%] xl:w-[48%] 2xl:w-[50%] relative z-10 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                animation: 'float 6s ease-in-out infinite 1s',
                willChange: 'transform'
              }}
              className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[600px] xl:max-w-[650px] 2xl:max-w-none mx-auto"
            >
              <Image
                src="/laptop.svg"
                alt="Professional website design displayed on laptop - Poleris Digital web development services"
                width={1440}
                height={758}
                className="w-full h-auto drop-shadow-2xl [filter:drop-shadow(0_0_30px_rgba(34,211,238,0.3))_drop-shadow(0_0_60px_rgba(34,211,238,0.15))]"
                priority
              />
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}