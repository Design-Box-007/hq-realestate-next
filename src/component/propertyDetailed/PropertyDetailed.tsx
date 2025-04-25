import React from 'react';
import { useParams } from 'next/navigation';
import PropertyPage from './PropertyHero';
import  { PropertyDetailsCard } from './PropertyDetailsCard';
import MapSection from '../Common/MapSection';
import { images } from '@/data/assets';
import SimilarProperty from './SimilarProperties';
import CTA from '../Common/Cta';
import Contact from '../Home/Contact/Contact';
import { propertyList } from '@/data/propertyData';
import formatToHyphenated from "@/utils/formatPathName";
import { PropertyCardProps as PropertyCardPropsType } from "@/types";

export default function PropertyDetailed() {
  const { propertyName } = useParams();  // Get the propertyName slug from the URL

  // Find the specific property data based on the slug (format to hyphenated title)
  const propertyData = propertyList.find((property: PropertyCardPropsType) =>
    propertyName === formatToHyphenated(property.title)
  );

  // If property not found, display message
  if (!propertyData) return <>PROPERTY NOT FOUND</>;

  return (
    <div className="container-fluid">
      <div className="position-relative">
        <PropertyPage />  {/* Display the PropertyHero component */}
        <PropertyDetailsCard property={propertyData} /> {/* Pass the correct propertyData */}
        
        <MapSection
          mapImage={images.mapImage}
          officeImage={images.OfficeImage}
          locationIcon={images.locationIcon}
          title="Give Us a Visit"
          addressLines={[
            '814, Burlington Towers, Business Bay, Dubai UAE',
            'info@hqrealestates.com',
            '+971 544040799',
            '+971 563600699',
            '044-580777',
          ]}
        />
        
        <SimilarProperty /> {/* Display similar properties */}
        
        <CTA
          backgroundImage={images.CTAbg}
          headline="Helping you find your dream property in Dubai"
          ctaText="Start Your Journey"
          ctaLink="/contact"
        />
        
        <Contact /> {/* Display contact information */}
      </div>
    </div>
  );
}
