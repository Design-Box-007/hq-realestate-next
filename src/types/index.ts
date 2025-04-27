import { ReactNode } from 'react';
import { IconType } from "react-icons";

interface Assets {
  [key: string]: string;
}

interface NavbarLinks {
  title: string;
  link: string;
  bgImage: string;
}

interface SocialMediaLinks {
  link: string;
  icon: IconType;
}

interface AboutUsPageData {
  title: string;
  content: string;
}

interface Service {
  id: string;
  imgSrc: string;
  title: string;
  icon: string;
  description: string
}

interface Testimonial {
  testimonial: string;
  testimonee: string;
  imgSrc: string;
  bgImage: string;
};

interface Gallery {
  title: string;
  imgSrc: string;
  icon: string;
  contentTitle: string;
  content: string;
  serviceId: string;
}



interface Blog {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  component: string;
  excerpt: string;
  content: string;
  authorName: string;
  date: string;
  updatedDate: string;
  slug: string;
  readTime: string;
  tags: string[];
  investmentData?: InvestmentData[]; // Add this property (make it optional with ? if needed)
}

export interface InvestmentData {
  id: string;
  title: string;
  image: string;
  averageROI: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[]
  bestInvestmentType: string;
}


export interface IBlog {
  blog_title: string;
  blog_subtitle:string;
  blog_description: string;
  cover_image: string;
  blog_authorName: string;
  created_date: string;
  updatedDate: string;
  readTime: number;
  tags: string[];
  market_insights: string;
  investmentData?: IInvestmentData[]; // Add this property (make it optional with ? if needed)
}

export interface IInvestmentData {
  investment_title: string;
  investment_cover_image: string;
  average_roi: string;
  best_investment_type: string;
  features: string[];
}






interface ContactForm {
  name: string;
  email: string;
  mobile: string;
  location: string;
  message: string;
}


export type {
  Assets,
  NavbarLinks,
  Service,
  SocialMediaLinks,
  Testimonial,
  AboutUsPageData,
  Gallery,
  Blog,
  ContactForm,
}

export interface AboutSectionProps {
  title: string;
  description: string;
  subDescription: string;
  imageSrc: string;
  imageAlt: string;
  teamMembers: {
    imageSrc: string;
    alt: string;
  }[];

}

export interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  features: FeatureCardProps[];
  // ctaText?: string;
}
export interface PropertyCardProps {
  id: string;
  images: string; // main image path or directory
  thumbnails: {
    id: string;
    url: string;
    alt: string;
  }[];
  ameneties: string[];
  image?: string[]; // optional array of main images
  propertyName: string;
  propertyLocation: string;
  title: string;
  propertyType: string;
  description: string;
  price: string | number;
  installmentYears: number;
  initialPayment: string | number;
  completionDate?: string; // optional if not always provided
  bedrooms: number;
  area: {
    value: number;
    unit: string;
  };
  contactLinks: {
    phone?: string;
    email?: string;
    whatsapp?: string;
    linkedin?: string;
  };
}
export interface HeroSectionProps {
  // Content options
  title?: string;
  subtitle?: string;
  description?: string;

  // Background image options
  backgroundImage: string;
  // overlay?: boolean;
  // overlayOpacity?: number;
  // Position for the external navbar
  // This helps with proper spacing if navbar is absolutely positioned
  navbarHeight?: string;

  // Consultation button
  showConsultationButton?: boolean;
  // consultationButtonText?: string;
  consultationIconSrc?: string;
  consultationLink?: string;

  // Additional elements
  additionalElement?: ReactNode;

  // Custom classes
  className?: string;
  contentClassName?: string;
}

export interface IAgent {
  agent_name_: string;
  profile_image: string;
  position: string;
  experience: number;
  email: string;
  phone_number: string;
  whatsapp: string; // empty string if not available
}

