'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Rocket,
  Target,
  Heart,
  Users,
  Award,
  TrendingUp,
  Zap,
  CheckCircle2,
  Sparkles,
  Clock,
  Shield
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Starfield } from '@/components/ui/starfield';
import { CustomButton } from '@/components/ui/custom-button';
import CountUp from './counter-animation';

/**
 * About Section Component
 * Comprehensive about us page with company story, values, team, and stats
 */

// Company Stats
const STATS = [
  {
    value: 100,
    suffix: '%',
    label: 'Hand-Coded Quality',
    icon: Code,
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime Guarantee',
    icon: Shield,
  },
  {
    value: 1,
    suffix: 's',
    label: 'Load Time Target',
    icon: Zap,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    icon: Clock,
  },
];

// Core Values
const VALUES = [
  {
    icon: Code,
    title: 'Craftsmanship',
    description: 'Every line of code is hand-written with precision and care. No shortcuts, no templates.',
    color: 'from-indigo-400 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Speed is our obsession. We build websites that load in under 1 second.',
    color: 'from-cerulean-blue-300 to-blue-500',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Your success is our success. We work with you, not for you.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Beautiful design means nothing without measurable business results.',
    color: 'from-indigo-400 to-red-400',
  },
];

// Why Choose Us
const WHY_CHOOSE_US = [
  {
    icon: Code,
    title: '100% Hand-Coded',
    description: 'No page builders or WordPress. Every pixel is coded with purpose.',
  },
  {
    icon: TrendingUp,
    title: 'SEO-First Approach',
    description: 'Built for search engines from the ground up. Rank higher, faster.',
  },
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Modern, clean interfaces that users love and convert.',
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    description: 'Enterprise-grade security with 99.9% uptime guarantee.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most projects completed within 2-4 weeks.',
  },
  {
    icon: Heart,
    title: 'Ongoing Support',
    description: '1 year of priority support included with every project.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={80} position="absolute" />

      {/* About Header - Standardized */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                About Us
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 28-32px mobile, 42-48px desktop */}
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-black mb-6 md:mb-8 leading-[1.25] md:leading-[1.1] text-[#001f3d] dark:text-white">
              We Build Websites That{' '}
              <span className="text-cyan-500 dark:text-cyan-400">
                Perform
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18-20px desktop */}
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] text-[#001f3d]/70 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              No page builders. No WordPress. Just clean, hand-coded websites
              built for speed, SEO, and conversions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
              <h2 className="text-[22px] md:text-[32px] font-bold text-[#001f3d] dark:text-white mb-8 md:mb-10 leading-[1.3] md:leading-[1.25]">
                Our Story
              </h2>
              {/* Body Text: 16px mobile, 18-20px desktop */}
              <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 text-base md:text-lg text-[#001f3d]/80 dark:text-gray-300">
                <p className="leading-[1.5] md:leading-[1.6]">
                  <span className="font-bold text-[#001f3d] dark:text-cyan-400">Poleris Digital</span> was born from a simple frustration: small businesses struggling with slow, bloated websites.
                </p>
                <p className="leading-[1.5] md:leading-[1.6]">
                  We believed there was a better way—prioritizing <span className="font-semibold">performance</span>, <span className="font-semibold">SEO</span>, and <span className="font-semibold">results</span>. So we started hand-coding from scratch.
                </p>
                <p className="leading-[1.5] md:leading-[1.6]">
                  Today, we partner with businesses across the US and Canada to deliver websites that <span className="font-bold text-cyan-600 dark:text-cyan-400">perform great</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#001f3d] dark:text-white mb-2">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm sm:text-base text-[#001f3d]/70 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div id="values" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Values
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500"></span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3d] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25]">
              What Drives Us
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18px desktop */}
            <p className="text-base md:text-lg text-[#001f3d]/70 dark:text-gray-400 max-w-2xl mx-auto leading-[1.5] md:leading-[1.6]">
              These core principles guide everything we do
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1 * index}>
                <div className="group relative p-6 sm:p-8 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-[#5c94ff] dark:hover:border-[#5c94ff] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-blue-50 dark:hover:bg-gray-800 hover:translate-x-[-6px] hover:translate-y-[-6px] active:translate-x-[-3px] active:translate-y-[-3px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:6px_6px_0px_#5c94ff] dark:hover:[box-shadow:6px_6px_0px_#5c94ff] active:[box-shadow:3px_3px_0px_#5c94ff]">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} mb-6 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500`}>
                    <Icon className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {/* H3 Section: 18-20px mobile, 24-28px desktop */}
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#001f3d] dark:text-white mb-3 leading-[1.4] md:leading-[1.3] group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-500">
                    {value.title}
                  </h3>
                  {/* Body Text: 16px mobile, 18px desktop */}
                  <p className="text-base md:text-lg text-[#001f3d]/70 dark:text-gray-400 leading-[1.5] md:leading-[1.6] group-hover:text-[#001f3d]/90 dark:group-hover:text-gray-300 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal direction="down" delay={0.1}>
              {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
              <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3d] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25]">
                Why Choose <span className="text-cyan-500 dark:text-cyan-400">Poleris Digital</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              {/* Body Text: 16px mobile, 18px desktop */}
              <p className="text-base md:text-lg text-[#001f3d]/70 dark:text-gray-400 max-w-2xl mx-auto leading-[1.5] md:leading-[1.6]">
                We're not just another web design agency. Here's what makes us different.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.05 * index}>
                  <div className="group p-5 sm:p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-[#5c94ff] dark:hover:border-[#5c94ff] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-blue-50 dark:hover:bg-gray-800 hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[-2px] active:translate-y-[-2px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:4px_4px_0px_#5c94ff] dark:hover:[box-shadow:4px_4px_0px_#5c94ff] active:[box-shadow:2px_2px_0px_#5c94ff]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <Icon className="w-6 h-6 text-white transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="flex-1">
                        {/* H3 Section: 18-20px mobile, 24px desktop */}
                        <h3 className="text-[18px] md:text-[20px] font-bold text-[#001f3d] dark:text-white mb-2 leading-[1.4] md:leading-[1.3] group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-500">
                          {item.title}
                        </h3>
                        {/* Caption/Body Text: 14px mobile, 16px desktop */}
                        <p className="text-sm md:text-base text-[#001f3d]/70 dark:text-gray-400 leading-[1.4] md:leading-[1.5] group-hover:text-[#001f3d]/90 dark:group-hover:text-gray-300 transition-colors duration-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600 via-cyan-500 to-cyan-700 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a website that drives real results for your business.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CustomButton
                href="#contact"
                variant="comic"
                size="lg"
                className="bg-white text-cerulean-blue-600 hover:bg-cerulean-blue-600 hover:text-white border-cerulean-blue-600"
              >
                Get Started Today
              </CustomButton>
              <CustomButton
                href="#pricing"
                variant="comic"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Pricing
              </CustomButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
