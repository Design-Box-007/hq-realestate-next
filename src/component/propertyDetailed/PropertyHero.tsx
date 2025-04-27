'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageData {
  id: string;
  url: string;
  alt: string;
}

interface PropertyHeroProps {
  mainImage: ImageData;
  thumbnails: ImageData[];
}

export function PropertyHeroSection({
  mainImage,
  thumbnails,
}: PropertyHeroProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData>(mainImage);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleThumbnailClick = (image: ImageData, index: number) => {
    if (selectedImage.id !== image.id) {
      setFade(true);
      setTimeout(() => {
        setSelectedImage(image);
        setActiveThumbnailIndex(index);
        setFade(false);
      }, 200);
    }
  };

  return (
    <div className="w-full my-4 sm:my-6">
      {/* Main Featured Image */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        className="text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[520px] p-4 sm:p-6 md:p-8 lg:p-12"
      >

        {/* Background Image */}
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out">
          <Image
            loading="eager"
            src={selectedImage.url || "/api/placeholder/800/500"}
            alt={selectedImage.alt}
            width={1153}
            height={641}
            className={`-z-10 h-full rounded-xl absolute w-full brightness-[0.8] top-0 right-0 left-0 object-cover ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-in-out`}
          />
        </div>

        {/* Property Info Overlay */}
        <motion.div
          initial={{ y: '-80px', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 3 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4 text-white"
        >
          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mt-1">
            {thumbnails.slice(0, 4).map((thumbnail, index) => (
              <div
                key={thumbnail.id}
                className={`cursor-pointer relative h-16 sm:h-20 md:h-28 lg:h-44 ${activeThumbnailIndex === index ? 'ring-2 ring-white rounded-xl' : ''}`}
                onClick={() => handleThumbnailClick(thumbnail, index)}
              >
                <Image
                  src={thumbnail.url || "/api/placeholder/200/150"}
                  alt={thumbnail.alt}
                  className="object-cover w-full h-full rounded-xl"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

// Example usage
const PropertyPage = () => {
  const sampleData = {
    mainImage: {
      id: "main-1",
      url: "/property/property.jpg",
      alt: "Dubai skyline with luxury skyscrapers"
    },
    thumbnails: [
      {
        id: "thumb-1",
        url: "/property/property-D/property1-1.png",
        alt: "Dubai skyline view"
      },
      {
        id: "thumb-2",
        url: "/property/property-D/property1-2.png",
        alt: "Modern living room with panoramic windows"
      },
      {
        id: "thumb-3",
        url: "/property/property-D/property1-3.png",
        alt: "Elegant bedroom with minimalist design"
      },
      {
        id: "thumb-4",
        url: "/property/property-D/property1-4.png",
        alt: "Luxury bathroom with marble finishes"
      }
    ],
  };

  return (
    <div className="mx-auto">
      <PropertyHeroSection 
        mainImage={sampleData.mainImage}
        thumbnails={sampleData.thumbnails}
      />
    </div>
  );
};

export default PropertyPage;
