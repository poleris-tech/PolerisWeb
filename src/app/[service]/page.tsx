"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { SERVICES, ADD_ONS, PRICING_PLANS } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Check } from "lucide-react";

/**
 * Service Detail Page
 * Individual page for each service with full details and CTA
 */

const SERVICE_DETAILS: Record<string, {
  fullDescription: string;
  longDescription: string;
  benefits: string[];
  whyChoose: string[];
  process: string[];
  cta: string;
}> = {
  "web-design": {
    fullDescription: "100% Hand-Coded Custom Websites",
    longDescription: "We build lightning-fast, fully custom websites from scratch. No page builders, no WordPress, no bloat. Every line of code is crafted for performance, SEO, and conversion. Your website will load in under 1 second and rank higher on Google.",
    benefits: [
      "Lightning-fast load times (under 1 second)",
      "Mobile-first responsive design",
      "SEO-optimized structure and code",
      "100% custom code (no templates)",
      "Superior security compared to page builders",
      "Full ownership and control",
    ],
    whyChoose: [
      "Page builders like WordPress are bloated and slow",
      "Custom code performs 3-5x faster",
      "Better SEO rankings with clean code",
      "Total control over design and functionality",
      "No vendor lock-in",
      "Lifetime code ownership",
    ],
    process: [
      "Discovery & Strategy: We learn about your business goals and target audience",
      "Design & Wireframes: Create beautiful, user-focused designs",
      "Hand-Coded Development: Build with React, TypeScript, and modern frameworks",
      "SEO Optimization: Structure for search engines and users",
      "Testing & Deployment: Rigorous QA and flawless launch",
      "Support & Maintenance: Ongoing support and updates included",
    ],
    cta: "Start Your Custom Website Today",
  },
  "seo": {
    fullDescription: "SEO Services That Get Results",
    longDescription: "Get found on Google with our proven SEO strategies. We don't just optimize—we deliver measurable rankings and traffic. Our comprehensive approach covers technical SEO, on-page optimization, and ongoing strategy.",
    benefits: [
      "Keyword research & competitor analysis",
      "On-page optimization for target keywords",
      "Technical SEO audit and fixes",
      "Schema markup implementation",
      "Monthly reporting and analytics",
      "Transparent communication",
    ],
    whyChoose: [
      "Most SEO agencies promise results but don't deliver",
      "We focus on sustainable, white-hat SEO",
      "Monthly reporting shows real progress",
      "Competitive keyword targeting",
      "Technical SEO that actually improves rankings",
      "Long-term strategy, not quick fixes",
    ],
    process: [
      "Website Audit: Complete technical and on-page analysis",
      "Competitor Research: Identify opportunities in your market",
      "Keyword Strategy: Target high-intent, profitable keywords",
      "On-Page Optimization: Title tags, meta descriptions, content",
      "Technical Fixes: Speed, indexing, structured data",
      "Monthly Monitoring: Track progress and adjust strategy",
    ],
    cta: "Get Your SEO Strategy Started",
  },
  "ppc": {
    fullDescription: "Google Ads Management & Strategy",
    longDescription: "Drive immediate, qualified traffic with expertly managed Google Ads campaigns. We handle everything from setup to optimization to maximize your ROI and minimize wasted ad spend.",
    benefits: [
      "Expert campaign setup and targeting",
      "Compelling ad copy that converts",
      "Conversion tracking and pixel setup",
      "Continuous A/B testing and optimization",
      "Monthly performance reports",
      "Transparent ROI tracking",
    ],
    whyChoose: [
      "Most agencies waste money on poor targeting",
      "We focus on quality over quantity",
      "Every dollar is tracked and optimized",
      "Real-time campaign adjustments",
      "Expert audience targeting",
      "Proven conversion optimization",
    ],
    process: [
      "Campaign Strategy: Identify target audience and goals",
      "Account Setup: Proper structure for optimization",
      "Ad Creation: Compelling copy and creative",
      "Targeting Optimization: Keywords, audiences, placements",
      "Bid Management: Maximize ROI at every level",
      "Weekly Optimization: Ongoing refinement and testing",
    ],
    cta: "Launch Your Google Ads Campaign",
  },
  "hosting": {
    fullDescription: "Fast, Secure, Reliable Web Hosting",
    longDescription: "Premium hosting that keeps your website lightning-fast and secure. With 99.9% uptime, automatic backups, and 24/7 monitoring, you can focus on your business while we handle the technical details.",
    benefits: [
      "Lightning-fast server performance",
      "99.9% uptime guarantee",
      "Automatic daily backups",
      "Free SSL certificates",
      "24/7 monitoring and alerts",
      "DDoS protection and security",
    ],
    whyChoose: [
      "Shared hosting is slow and unreliable",
      "Premium hosting ensures fast load times",
      "Better security and performance",
      "Automatic backups protect your data",
      "24/7 monitoring catches issues early",
      "Dedicated support team",
    ],
    process: [
      "Server Selection: Choose the right hosting tier",
      "Setup & Migration: Fast, seamless migration",
      "Security Configuration: SSL, firewalls, monitoring",
      "Performance Optimization: CDN, caching setup",
      "Backup Configuration: Automated daily backups",
      "Ongoing Monitoring: 24/7 uptime and security monitoring",
    ],
    cta: "Get Premium Hosting Today",
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params?.service as string;

  // Find the service
  const service = SERVICES.find(s => s.id === serviceId);
  const details = SERVICE_DETAILS[serviceId as keyof typeof SERVICE_DETAILS];

  if (!service || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#001f3f] dark:text-white mb-4">Service Not Found</h1>
          <p className="text-lg text-[#001f3f]/75 dark:text-gray-300 mb-8">Sorry, we couldn't find the service you're looking for.</p>
          <CustomButton href="/" variant="primary" size="lg">
            Back to Home
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-28 md:pt-32 lg:pt-36">
        <Breadcrumb
          items={[
            {
              label: service.title,
              href: `/${service.id}`,
            },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-br from-white dark:from-gray-950 to-gray-50 dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#001f3f] dark:text-white mb-6 leading-[1.2]">
              {details.fullDescription}
            </h1>
            <p className="text-lg md:text-xl text-[#001f3f]/75 dark:text-gray-300 mb-10 leading-relaxed">
              {details.longDescription}
            </p>
            <CustomButton
              href="#contact"
              variant="comic"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </CustomButton>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001f3f] dark:text-white mb-4 text-center">
              Key Benefits
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-[#001f3f]/75 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              What makes our {service.title.toLowerCase()} stand out from the competition.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {details.benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#4A90E2] text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#001f3f] dark:text-white">
                      {benefit}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001f3f] dark:text-white mb-4 text-center">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {details.whyChoose.map((reason, index) => (
              <ScrollReveal key={index} direction="left" delay={0.1 * (index + 1)}>
                <div className="p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#4A90E2] dark:hover:border-[#4A90E2] transition-colors">
                  <p className="text-[#001f3f] dark:text-white font-semibold">
                    {reason}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001f3f] dark:text-white mb-4 text-center">
              Our Process
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-[#001f3f]/75 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              How we deliver results, step by step.
            </p>
          </ScrollReveal>

          <div className="space-y-6 max-w-3xl mx-auto">
            {details.process.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="flex gap-6 p-6 rounded-xl bg-[#FDF4E3]/10 dark:bg-[#FDF4E3]/5 border border-[#FDF4E3]/20 dark:border-[#FDF4E3]/10 hover:bg-[#FDF4E3]/15 dark:hover:bg-[#FDF4E3]/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-[#FDF4E3] to-[#FDF2DB] text-slate-900 font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg font-semibold text-[#001f3f] dark:text-white">
                      {step}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001f3f] dark:text-white mb-4 text-center">
              Simple Pricing
            </h2>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-white dark:bg-gray-950 border-2 border-[#4A90E2]">
            <h3 className="text-2xl font-bold text-[#001f3f] dark:text-white mb-6">
              {PRICING_PLANS[0].name}
            </h3>
            <div className="mb-8">
              <div className="text-5xl font-black text-[#4A90E2] mb-2">
                ${PRICING_PLANS[0].oneTimePrice}
              </div>
              <p className="text-[#001f3f]/75 dark:text-gray-300">
                One-time investment + ${PRICING_PLANS[0].monthlyPrice}/month for hosting & support
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {PRICING_PLANS[0].features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#001f3f] dark:text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <CustomButton
              href="#contact"
              variant="comic"
              size="lg"
              fullWidth
              className="text-base md:text-lg py-4"
            >
              Start Project
            </CustomButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#4A90E2] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              {details.cta}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how {service.title.toLowerCase()} can help your business grow.
            </p>
            <CustomButton
              href="/#contact"
              variant="primary"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </CustomButton>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-black text-[#001f3f] dark:text-white mb-4 text-center">
              Other Services
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-[#001f3f]/75 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Discover what else we can do for your business
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.filter(s => s.id !== serviceId).map((relatedService, index) => (
              <ScrollReveal key={relatedService.id} direction="up" delay={0.1 * (index + 1)}>
                <Link
                  href={`/${relatedService.id}`}
                  className="group block p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#4A90E2] dark:hover:border-[#4A90E2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-[#001f3f] dark:text-white mb-3 group-hover:text-[#4A90E2] transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-[#001f3f]/75 dark:text-gray-300 mb-4 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#4A90E2] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <CustomButton
              href="/#services"
              variant="comic"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4"
            >
              View All Services
            </CustomButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
