'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSectionProps } from '@/types';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  showConsultationButton = true,
  consultationIconSrc = '/user-icon.png',
  consultationLink = '#',
  additionalElement,
  className = '',
  contentClassName = '',
}) => {
  return (
    <div 
      className={`hero-section position-relative overflow-hidden rounded-2xl ${className}`}
      style={{ height: '100vh' }} // ✨ Full screen height
    >

      {/* Background layer with Left to Right Reveal */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}   
        className="position-absolute top-0 start-0 w-100 h-100 brightness-[.40] filter"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: '-80px', opacity: 0 }}   
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 3 }} 
        className={`position-absolute bottom-0 start-0 p-4 p-md-5 w-100 ${contentClassName}`}
        style={{ zIndex: 2 }}
      >
        <div className="row d-flex justify-content-between align-items-end">

          {/* Title text on left */}
          <div className="col-12 col-md-7 leading-4">
            {title && (
              <h1 className="display-4 font-medium text-white mb-2">{title}</h1>
            )}
            {subtitle && (
              <h1 className="display-4 font-medium text-white">{subtitle}</h1>
            )}
            {description && (
              <p className="text-base font-medium text-white mt-4">{description}</p>
            )}
          </div>

          {/* Consultation button on right */}
          {showConsultationButton && (
            <div className="col-auto mt-4 mt-md-0 bg-white rounded-4xl py-2 pl-2 pr-4">
              <Link href={consultationLink} className="text-decoration-none d-flex align-items-center">
                <div
                  className="bg-gray-200 rounded-circle d-flex align-items-center justify-center overflow-hidden"
                  style={{ width: '48px', height: '48px' }}
                >
                  <Image 
                    src={consultationIconSrc}
                    alt="Consultation"
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="ms-2 text-sm font-medium">
                  <span className="d-block text-gray-800">Get Our</span>
                  <span className="text-gray-800">Consultation</span>
                </div>
              </Link>
            </div>
          )}

          {/* Additional element */}
          {additionalElement && (
            <div className="mt-3">
              {additionalElement}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
