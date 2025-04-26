'use client';

import React from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { motion } from 'framer-motion'; // import framer motion

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  features: FeatureCardProps[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  subtitle,
  title,
  imageSrc,
  features,
}) => {
  return (
    <section className="text-white py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Text Content Animation */}
        <motion.div 
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm md:text-base mb-2">{subtitle}</p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${urbanist.className}`}>
            {title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Image Animation */}
          <motion.div 
            className="relative rounded overflow-hidden h-64 sm:h-96 md:h-[480px] lg:h-[600px] w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={imageSrc}
              alt="Office environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </motion.div>

          {/* Features Animation */}
          <motion.div 
            className="w-full md:px-4 mt-6 md:absolute md:bottom-6 md:left-0 md:right-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="rounded overflow-hidden bg-[#333333] shadow-lg mx-auto w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gradient-to-b from-[#222222] to-[#444444] shadow-md rounded-lg flex flex-col"
                    variants={itemVariants}
                  >
                    <div className="mb-3">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="text-yellow-400"
                      />
                    </div>
                    <h6 className="text-yellow-400 font-bold mb-2 text-lg">{feature.title}</h6>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
