'use client';

import React from 'react';
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
  slides = []
}) => {

  // Use provided slides or create a default with current props
  const heroSlides = slides.length > 0 ? slides : [{
    subheading,
    heading,
    content,
    bgImage,
    ctaLink,
    ctaName
  }];

  const currentSlide = heroSlides[0];

  return (
    <section className="text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden min-h-[520px] max-[500px]:pt-[100px] p-8 sm:p-6 md:p-10 lg:p-12">
      
      {/* Background Layer with Left to Right Reveal */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}   
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 brightness-[0.8] filter"
        style={{ backgroundImage: `url(${currentSlide.bgImage || bgImage})` }}
      ></motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ y: '-80px', opacity: 0 }}   
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 3 }} 
        className="text-left flex flex-col gap-3 sm:gap-2 z-10"
      >
        {/* Subheading */}
        {currentSlide.subheading && (
          <motion.p
            className="text-lg md:text-xl text-white font-medium mb-1"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            key={`subheading-${0}`}
          >
            {currentSlide.subheading}
          </motion.p>
        )}

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold"
          dangerouslySetInnerHTML={{ __html: currentSlide.heading || heading }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          key={`heading-${0}`}
        />

        {/* Content */}
        <motion.p
          className="text-xl md:text-2xl text-white/90"
          dangerouslySetInnerHTML={{ __html: currentSlide.content || content }}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          key={`content-${0}`}
        />

        {/* Conditionally Render CTA Button */}
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
      </motion.div>
    </section>
  );
};

export default Hero;
