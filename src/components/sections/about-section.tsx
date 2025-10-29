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
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    icon: Rocket,
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime Guarantee',
    icon: Shield,
  },
  {
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Heart,
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
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Speed is our obsession. We build websites that load in under 1 second.',
    color: 'from-cyan-400 to-teal-400',
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
    color: 'from-orange-400 to-red-400',
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

      {/* About Header - Light & Clean */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-600"></div>
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                About Us
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-cyan-600 to-transparent"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-[#001f3d] dark:text-white">
              We Build Websites That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Perform
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-[#001f3d]/70 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              No page builders. No WordPress. Just clean, hand-coded websites
              built for speed, SEO, and conversions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f3d] dark:text-white mb-6">
                Our Story
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-[#001f3d]/80 dark:text-gray-300 leading-relaxed">
                <p>
                  <span className="font-bold text-[#001f3d] dark:text-cyan-400">Poleris Digital</span> was born from a simple frustration:
                  seeing small businesses struggle with slow, bloated websites built on outdated platforms.
                </p>
                <p>
                  We believed there was a better way. A way that prioritized <span className="font-semibold">performance</span>,
                  <span className="font-semibold"> SEO</span>, and <span className="font-semibold">results</span> over convenience.
                  So we started hand-coding websites from scratch—no WordPress, no page builders, no compromises.
                </p>
                <p>
                  Today, we partner with small businesses across the US and Canada to deliver
                  websites that don't just look great—they <span className="font-bold text-cyan-600 dark:text-cyan-400">perform great</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 shadow-lg">
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
      <div id="values" className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                Our Values
              </span>
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3d] dark:text-white mb-4">
              What Drives Us
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-[#001f3d]/70 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1 * index}>
                <div className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f3d] dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#001f3d]/70 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal direction="down" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3d] dark:text-white mb-4">
                Why Choose <span className="text-cyan-600 dark:text-cyan-400">Poleris Digital</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-[#001f3d]/70 dark:text-gray-400 max-w-2xl mx-auto">
                We're not just another web design agency. Here's what makes us different.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.05 * index}>
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#001f3d] dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#001f3d]/70 dark:text-gray-400 leading-relaxed">
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
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl">
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
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 border-0"
              >
                Get Started Today
              </CustomButton>
              <CustomButton
                href="#pricing"
                variant="outline"
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
