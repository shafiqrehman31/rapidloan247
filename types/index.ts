// Menu item types
export interface MenuItem {
  title: string;
  href: string;
  dropdown?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  href: string;
  submenu?: NestedMenuItem[];
}

export interface NestedMenuItem {
  title: string;
  href: string;
}

// Footer link types
export interface FooterLink {
  title: string;
  href: string;
}

// Team member types
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Service types
export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

// Pricing plan types
export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  link: string;
}

// Blog post types
export interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  link: string;
}

// Client types
export interface Client {
  name: string;
  logo: string;
  alt: string;
}