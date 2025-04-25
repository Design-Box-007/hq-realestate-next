import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageData {
  id: string;
  url: string;
  alt: string;
}

interface PropertyHeroProps {
  mainImage: ImageData;
  thumbnails: ImageData[];
  propertyName: string;
  propertyLocation: string;
}

export  function PropertyHeroSection({
  mainImage,
  thumbnails,
  propertyName,
  propertyLocation
}: PropertyHeroProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData>(mainImage);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  
  const handleThumbnailClick = (image: ImageData, index: number) => {
    setSelectedImage(image);
    setActiveThumbnailIndex(index);
  };

  return (
    <div className="w-full my-6">
      {/* Main Featured Image */}
      
         <div className="text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden min-h-[520px] max-[500px]:pt-[100px] p-8 sm:p-6 md:p-10 lg:p-12">
              <Image
                loading="eager"
                src={selectedImage.url || "/api/placeholder/800/500"}
                alt={selectedImage.alt}
                width={1153}
                height={641}
               
                className="-z-10 h-full rounded-xl absolute w-full brightness-[0.8] top-0 right-0 left-0 object-cover"
              />
        
        {/* Property Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          {/* Thumbnails - Fixed to exactly 4 cards */}
      <div className="grid grid-cols-4 gap-2 mt-1">
        {thumbnails.slice(0, 4).map((thumbnail, index) => (
          <div 
            key={thumbnail.id}
            className={`cursor-pointer relative h-44 ${
              activeThumbnailIndex === index ? 'ring-2 ring-white rounded-xl' : ''
            }`}
            onClick={() => handleThumbnailClick(thumbnail, index)}
          >
            <Image
              src={thumbnail.url || "/api/placeholder/200/150"}
              alt={thumbnail.alt}
              className="object-cover w-full h-full rounded"
              fill
              
            />
          </div>
        ))}
      </div>
        </div>
      </div>
      
      
    </div>
  );
}

// Example implementation with Dubai skyline data
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
        url: "/property/property.jpg",
        alt: "Dubai skyline view"
      },
      {
        id: "thumb-2",
        url: "/property/property.jpg",
        alt: "Modern living room with panoramic windows"
      },
      {
        id: "thumb-3",
        url: "/property/property.jpg",
        alt: "Elegant bedroom with minimalist design"
      },
      {
        id: "thumb-4",
        url: "/property/property.jpg",
        alt: "Luxury bathroom with marble finishes"
      }
    ],
    propertyName: "Luxury Sky View Apartments",
    propertyLocation: "Downtown Dubai, United Arab Emirates"
  };

  return (
    <div className=" mx-auto">
      <PropertyHeroSection 
        mainImage={sampleData.mainImage}
        thumbnails={sampleData.thumbnails}
        propertyName={sampleData.propertyName}
        propertyLocation={sampleData.propertyLocation}
      />
    </div>
  );
};

export default PropertyPage;