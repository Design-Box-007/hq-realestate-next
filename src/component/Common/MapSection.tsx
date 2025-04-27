'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';


interface ImageGalleryType {
  id: string;
  src: string;
  alt: string;
}

interface LocationProps {
  address: string;
  mapImageSrc: string;
  title: string;
  imageGallery: ImageGalleryType[];
}

const LocationSection: React.FC<LocationProps> = ({
  address,
  mapImageSrc,
  imageGallery,
  title
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleThumbnailClick = (image: ImageGalleryType, index: number) => {
    if (imageGallery[activeImageIndex].id !== image.id) {
      setFade(true);
      setTimeout(() => {
        setActiveImageIndex(index);
        setFade(false);
      }, 200);
    }
  };

  return (
    <motion.div
      className="w-full min-h-screen text-white relative overflow-hidden mx-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src={mapImageSrc}
          alt="Location Map"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10 h-full px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Side - Location Info */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="col-12 col-lg-6 mb-4"
          >
            <h2 className="display-4 mb-4">{title}</h2>
            <div className="d-flex align-items-center gap-2">
              <MapPin className="text-[#EDBE8C]" size={24} />
              <p className="font-['Poppins'] text-base md:text-lg tracking-wider mb-0">
                {address}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image Gallery */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: '100%' }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full">
              {/* Main Image */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative rounded-lg overflow-hidden">
                <Image
                  src={imageGallery[activeImageIndex].src}
                  alt={imageGallery[activeImageIndex].alt}
                  fill
                  className={`object-cover transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
              </div>

              {/* Thumbnails */}
              <div className="absolute bottom-4 right-4 flex gap-2 rounded-lg">
                {imageGallery.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={image.id}
                    className={`w-16 h-20 sm:w-20 sm:h-14 md:w-24 md:h-16 relative rounded-lg overflow-hidden cursor-pointer ${activeImageIndex === index ? 'ring-1 ring-[#EDBE8C]' : ''
                      }`}
                    onClick={() => handleThumbnailClick(image, index)}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3 * index }}
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
