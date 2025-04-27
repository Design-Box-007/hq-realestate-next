'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import PropertyPage from './PropertyHero';
import { PropertyDetailsCard } from './PropertyDetailsCard';
// import MapSection from '../Common/MapSection';
import { images } from '@/data/assets';
import SimilarProperty from './SimilarProperties';
import CTA from '../Common/Cta';
import Contact from '../Home/Contact/Contact';
import { propertyList } from '@/data/propertyData';
import formatToHyphenated from "@/utils/formatPathName";
import { PropertyCardProps } from "@/types";
import Navbar from '../Common/NavbarMenu';
import LocationSection from '../Common/MapSection';

export default function PropertyDetailed() {
  const { propertyName } = useParams();  // Get the propertyName slug from the URL

  // Find the specific property data based on the slug (format to hyphenated title)
  const propertyData = propertyList.find((property) =>
    propertyName === formatToHyphenated(property.title)
  ) as PropertyCardProps;

  // If property not found, display message
  if (!propertyData) return <>PROPERTY NOT FOUND</>;

  return (
    <div className="container-fluid">
      <div className="position-relative">
        <Navbar />
        <PropertyPage />  {/* Display the PropertyHero component */}
        <PropertyDetailsCard property={propertyData} /> {/* Pass the correct propertyData */}

        <LocationSection
      address="Suite 756 031 Ines Riverway, Khanmanchester"
      mapImageSrc={images.mapImage}
      imageGallery={[
        {
          id: "main",
          src: images.OfficeImage,
          alt: "Modern office interior"
        },
        {
          id: "thumb-1",
          src: "/office/office1.png",
          alt: "Office hallway with glass partitions"
        },
        {
          id: "thumb-2",
          src: "/office/office2.png",
          alt: "Contemporary living space"
        },
        {
          id: "thumb-3",
          src: "/office/office3.png",
          alt: "Contemporary living space"
        }

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
