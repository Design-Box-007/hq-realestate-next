'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationProps {
  address: string;
  mapImageSrc: string;
  imageGallery: {
    id: string;
    src: string;
    alt: string;
  }[];
}

const LocationSection: React.FC<LocationProps> = ({ 
  address, 
  mapImageSrc, 
  imageGallery 
}) => {
  // State to track which image is currently being displayed
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Animation variants for staggered revealing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full h-[600px] bg-black text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      style={{ position: 'relative' }}
    >
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={mapImageSrc}
          alt="Location Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  py-8 px-4">
          {/* Left Side - Location Info */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h2 className="font-['Poppins'] font-medium text-3xl sm:text-4xl md:text-5xl mb-6 tracking-wider">
              Location
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <MapPin/>
              <p className="font-['Poppins'] font-medium text-base sm:text-lg tracking-wider text-center">
                {address}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image Gallery */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <div className="relative w-full md:w-3/4 lg:w-full max-w-[724px]">
              {/* Main Image */}
              <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[457px] relative rounded-lg overflow-hidden">
                <Image
                  src={imageGallery[activeImageIndex].src}
                  alt={imageGallery[activeImageIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="absolute bottom-4 right-4 left-4 flex justify-center md:justify-start gap-2">
                {imageGallery.map((image, index) => (
                  <motion.div 
                    key={image.id}
                    className={`w-[100px] h-[60px] sm:w-[149px] sm:h-[94px] relative rounded-lg overflow-hidden cursor-pointer ${
                      activeImageIndex === index ? 'ring-1 ring-[#EDBE8C]' : ''
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                    variants={itemVariants}
                    style={{
                      background: 'transparent',
                      borderRadius: '8px',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderImageSource: 'linear-gradient(180deg, #EDBE8C 0%, #BD9167 100%)',
                      borderImageSlice: '1'
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSection;