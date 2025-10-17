import { Service, PricingPlan, Testimonial, PortfolioItem, BlogPost } from "@/types";

/**
 * Site-wide data constants following MVP pattern
 * Centralized data management for easy updates
 */

export const SITE_CONFIG = {
  name: "Poliris Digital",
  description: "100% Hand-Coded Websites. No page builders, no WordPress. Performance-focused web design.",
  url: "https://polirisdigital.com",
  tagline: "Web Design That Delivers Results",
} as const;

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Custom Web Design",
    description: "100% hand-coded websites built for performance and conversion. No page builders, no bloat.",
    icon: "Code",
    features: [
      "Mobile-first responsive design",
      "1-second load times",
      "SEO optimized",
      "Clean, maintainable code",
    ],
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Get found on Google with our proven SEO strategies and optimization techniques.",
    icon: "Search",
    features: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audit",
      "Monthly reporting",
    ],
  },
  {
    id: "ppc",
    title: "Google PPC Ads",
    description: "Drive targeted traffic with expertly managed pay-per-click advertising campaigns.",
    icon: "Target",
    features: [
      "Campaign setup & management",
      "Ad copy creation",
      "Conversion tracking",
      "ROI optimization",
    ],
  },
  {
    id: "hosting",
    title: "Website Hosting",
    description: "Fast, secure hosting with 99.9% uptime guarantee. We handle all the technical details.",
    icon: "Server",
    features: [
      "Lightning-fast servers",
      "SSL certificates included",
      "Daily backups",
      "24/7 monitoring",
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard Website",
    monthlyPrice: 175,
    downPayment: 0,
    minimumContract: 12,
    popular: true,
    features: [
      "5-page custom website",
      "100% hand-coded",
      "Mobile-first design",
      "SEO optimized",
      "Hosting included",
      "SSL certificate",
      "Unlimited edits",
      "24/7 support",
      "Google Analytics",
      "Contact form setup",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "Owner",
    company: "Local Business Co.",
    content: "The team delivered exactly what we needed. Our website loads incredibly fast and looks great on all devices.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Startup Inc.",
    content: "Professional service from start to finish. The hand-coded approach makes a real difference in performance.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mike Davis",
    role: "Founder",
    company: "Creative Agency",
    content: "Best investment we made for our business. The monthly model makes it affordable and the support is exceptional.",
    rating: 5,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Store",
    description: "Modern e-commerce platform with seamless checkout experience",
    image: "/portfolio/project-1.jpg",
    tags: ["E-commerce", "Web Design", "SEO"],
  },
  {
    id: "2",
    title: "Business Website",
    description: "Professional corporate website with lead generation focus",
    image: "/portfolio/project-2.jpg",
    tags: ["Business", "Web Design", "Lead Gen"],
  },
  {
    id: "3",
    title: "Restaurant Site",
    description: "Beautiful restaurant website with online ordering integration",
    image: "/portfolio/project-3.jpg",
    tags: ["Restaurant", "Web Design", "Online Ordering"],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Hand-Coded Websites Beat Page Builders",
    excerpt: "Discover the performance and security benefits of hand-coded websites over page builders like WordPress.",
    date: "2025-01-15",
    author: "Poliris Team",
    slug: "hand-coded-vs-page-builders",
    tags: ["Web Development", "Performance"],
  },
  {
    id: "2",
    title: "Mobile-First Design: Best Practices for 2025",
    excerpt: "Learn the essential mobile-first design principles that will make your website stand out in 2025.",
    date: "2025-01-10",
    author: "Poliris Team",
    slug: "mobile-first-design-2025",
    tags: ["Design", "Mobile"],
  },
  {
    id: "3",
    title: "SEO Fundamentals Every Business Owner Should Know",
    excerpt: "Master the basics of SEO and learn how to improve your website's visibility on Google.",
    date: "2025-01-05",
    author: "Poliris Team",
    slug: "seo-fundamentals",
    tags: ["SEO", "Marketing"],
  },
];
