import { investmentAreasData } from './../component/blog/FeaturedInvestmentAreas';
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
    investmentData?: any; // Add this property (make it optional with ? if needed)
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
    ctaText?: string;
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
  