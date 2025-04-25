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
  image: string;
  title: string;
  propertyType: string;
  price: string;
  installmentYears: number;
  initialPayment: string;
  completionDate: string;
  icons: string;
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
