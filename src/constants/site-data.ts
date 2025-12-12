import { Service, PricingPlan, Testimonial, PortfolioItem, BlogPost, AddOn, ProcessStep } from "@/types";

/**
 * Site-wide data constants following MVP pattern
 * Centralized data management for easy updates
 */

export const SITE_CONFIG = {
  name: "Poleris Digital",
  description: "100% Hand-Coded Websites. No page builders, no WordPress. Performance-focused web design.",
  url: "https://polerisdigital.com",
  tagline: "Web Design That Delivers Results",
} as const;

export const CONTACT_INFO = {
  email: "polerisllc@outlook.com",
  phone: "(617) 838-3859",
  phoneHref: "+16178383859",
  location: "United States",
  availability: "Available 24/7",
  social: {
    twitter: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  }
} as const;

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Website Design",
    description: "We design visually appealing websites that reflect your brand and engage users.",
    icon: "Code",
    features: [
      "We design visually appealing websites that reflect your brand and engage users.",
      "Mobile-first responsive design",
      "1-second load times",
      "SEO optimized",
    ],
  },
  {
    id: "ppc",
    title: "Web Development",
    description: "Our team develops responsive, fast websites using modern web technologies.",
    icon: "Target",
    features: [
      "Our team develops responsive, fast websites using modern web technologies.",
      "Campaign setup & management",
      "Ad copy creation",
      "Conversion tracking",
      "ROI optimization",
    ],
  },
  {
    id: "seo",
    title: "SEO & Optimization",
    description: "We improve your site's visibility on search engines and optimize site performance.",
    icon: "Search",
    features: [
      "We improve your site's visibility on search engines and optimize site performance.",
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audit",
      "Monthly reporting",
    ],
  },
  {
    id: "hosting",
    title: "UI/UX Design",
    description: "We create intuitive and user-friendly interfaces that enhance the user experience.",
    icon: "Server",
    features: [
      "We create intuitive and user-friendly interfaces that enhance the user experience.",
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
    name: "Custom Website Package",
    oneTimePrice: 3200,
    monthlyPrice: 30,
    popular: true,
    features: [
      "Fully custom-coded website (up to 6 pages)",
      "Mobile-first responsive design",
      "SEO-ready structure & on-page optimization",
      "Domain, SSL & deployment setup",
      "1 year of priority support",
      "Google Analytics integration",
      "Contact form setup",
      "100% hand-coded (no page builders)",
    ],
  },
];

export const ADD_ONS: AddOn[] = [
  {
    id: "blog",
    name: "Blog Integration",
    price: 250,
    type: "one-time",
    description: "Add a fully-featured blog to your website with categories, tags, and RSS feed",
  },
  {
    id: "additional-pages",
    name: "Additional Pages",
    price: 100,
    type: "one-time",
    description: "Add extra pages beyond the included 6 pages (per page)",
  },
  {
    id: "unlimited-edits",
    name: "Unlimited Edits Add-On",
    price: 40,
    type: "monthly",
    description: "Make unlimited content and design changes anytime without extra charges",
  },
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    price: 300,
    type: "one-time",
    description: "Get your site ranking faster with structured on-page SEO. Includes keyword research, title/meta optimization, and sitemap submission to Google",
  },
  {
    id: "google-ads",
    name: "Google Ads Management",
    price: 400,
    type: "monthly",
    description: "Generate immediate traffic with strategic campaigns. Full setup, copywriting, targeting, and monthly reporting included. Ad spend managed separately.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "plan",
    number: 1,
    title: "Plan",
    description: "We understand your goals, audience, and design direction.",
    icon: "Lightbulb",
  },
  {
    id: "design",
    number: 2,
    title: "Design",
    description: "We craft a clean, on-brand layout with intuitive UX.",
    icon: "Palette",
  },
  {
    id: "develop",
    number: 3,
    title: "Develop",
    description: "We hand-code your website for performance and SEO.",
    icon: "Code",
  },
  {
    id: "launch",
    number: 4,
    title: "Launch",
    description: "We test, deploy, and fine-tune for flawless performance.",
    icon: "Rocket",
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
    author: "Poleris Team",
    slug: "hand-coded-vs-page-builders",
    tags: ["Web Development", "Performance"],
  },
  {
    id: "2",
    title: "Mobile-First Design: Best Practices for 2025",
    excerpt: "Learn the essential mobile-first design principles that will make your website stand out in 2025.",
    date: "2025-01-10",
    author: "Poleris Team",
    slug: "mobile-first-design-2025",
    tags: ["Design", "Mobile"],
  },
  {
    id: "3",
    title: "SEO Fundamentals Every Business Owner Should Know",
    excerpt: "Master the basics of SEO and learn how to improve your website's visibility on Google.",
    date: "2025-01-05",
    author: "Poleris Team",
    slug: "seo-fundamentals",
    tags: ["SEO", "Marketing"],
  },
];
