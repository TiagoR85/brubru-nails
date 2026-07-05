export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  price?: string;
  externalUrl: string;
  badge?: string;
  features?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}
