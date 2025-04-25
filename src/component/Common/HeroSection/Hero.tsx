'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  subheading?: string;
  heading: string;
  content: string;
  ctaName?: string;
  ctaLink?: string;
  ctaStatus?: boolean;
  bgImage: string;
  featured?: boolean;
  onNavigate?: () => void;
  slides?: Array<{
    subheading?: string;
    heading: string;
    content: string;
    bgImage: string;
    ctaLink?: string;
    ctaName?: string;
  }>;
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC<HeroProps> = ({ 
  subheading,
  heading, 
  content, 
  ctaName, 
  ctaLink, 
  ctaStatus = false, 
  bgImage,
  featured = false,
  onNavigate,
  slides = []
}) => {
  // If slides are provided, we can implement navigation between them
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Use provided slides or create a default with current props
  const heroSlides = slides.length > 0 ? slides : [{
    subheading,
    heading,
    content,
    bgImage,
    ctaLink,
    ctaName
  }];
  
  // Navigation function to move to the next slide
  const handleNavigation = () => {
    if (onNavigate) {
      // If custom navigation is provided, use that
      onNavigate();
    } else if (slides.length > 0) {
      // Otherwise handle internal navigation between slides
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }
  };
  
  // Get current slide data
  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section className="text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden min-h-[520px] max-[500px]:pt-[100px] p-8 sm:p-6 md:p-10 lg:p-12">
      <Image
        loading="eager"
        src={currentSlide.bgImage || bgImage}
        width={1153}
        height={641}
        alt="background"
        className="-z-10 h-full rounded-xl absolute w-full brightness-[0.8] top-0 right-0 left-0 object-cover"
      />
      
      {/* Navigation arrow */}
      {/* <div 
        className="absolute top-1/2 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-white/20 transition-all"
        onClick={handleNavigation}
      >
        <ArrowRight size={24} className="text-white" />
      </div> */}
      
      {/* content section */}
      <div className="text-left flex flex-col gap-3 sm:gap-2 ">
       
        
        {/* Subheading */}
        {currentSlide.subheading && (
          <motion.p
            className="text-lg md:text-xl text-white font-medium mb-1"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            key={`subheading-${currentSlideIndex}`}
          >
            {currentSlide.subheading}
          </motion.p>
        )}
        
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold"
          dangerouslySetInnerHTML={{ __html: currentSlide.heading || heading }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          key={`heading-${currentSlideIndex}`}
        />
        
        <motion.p
          className="text-xl md:text-2xl text-white/90"
          dangerouslySetInnerHTML={{ __html: currentSlide.content || content }}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          key={`content-${currentSlideIndex}`}
        />
        
        {/* Conditionally render CTA button */}
        {ctaStatus && currentSlide.ctaName && currentSlide.ctaLink && (
          <a
            href={currentSlide.ctaLink}
            className="flex gap-2 mt-6 w-fit bg-white flex-row-reverse items-center text-white p-2 sm:p-3 rounded-full"
          >
            <span className="bg-primary rounded-full p-1 sm:p-2">
              <ArrowRight size={16} className="text-white" />
            </span>
            <span className="text-secondary text-lg font-medium">
              {currentSlide.ctaName}
            </span>
          </a>
        )}
      </div>
      
      {/* Optional slide indicators */}
      {/* {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentSlideIndex ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => setCurrentSlideIndex(index)}
            />
          ))}
        </div>
      )} */}
    </section>
  );
};

export default Hero;