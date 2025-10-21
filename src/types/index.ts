/**
 * Type definitions for the application
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  oneTimePrice?: number;
  downPayment?: number;
  features: string[];
  popular?: boolean;
  minimumContract?: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  type: 'one-time' | 'monthly';
  description: string;
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  tags: string[];
}
