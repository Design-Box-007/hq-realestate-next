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
import formatToHyphenated from "@/utils/formatPathName";
import { IProperty } from "@/types";
import Navbar from '../Common/NavbarMenu';
import LocationSection from '../Common/MapSection';
import { useGetProperties } from '@/hooks/useGetProperties';
import ErrorScreen from '../Common/ErrorScreen';
import LoadingScreen from '../Common/LoadingScreen';

export default function PropertyDetailed() {
  const { propertyName } = useParams();
  const { properties, loading, error } = useGetProperties();


  if (loading) return <LoadingScreen title="Properties are Loading" />;
  if (error) return <ErrorScreen />;

  if (properties.length === 0) {
    return <ErrorScreen title='No Properties Found' />
  }

  const propertyData = properties.find((property: IProperty) =>
    propertyName === formatToHyphenated(property.title)
  ) as IProperty;

  // If property not found, display message
  if (!propertyData) return <>PROPERTY NOT FOUND</>;

  return (
    <div className="container-fluid">
      <div className="position-relative">
        {/* Wrap each component inside a div with my-5 */}
        <div >
          <Navbar />
        </div>

        <div className="mb-5">
          <PropertyPage />  {/* Display the PropertyHero component */}
        </div>

        <div className="mt-5 mb-16">
          <PropertyDetailsCard property={propertyData} /> {/* Pass the correct propertyData */}
        </div>

        <div className="my-5">
          <LocationSection
            title="Give Us a Visit"
            address=" 814 Burlington Tower, Business Bay, Dubai-UAE"
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
        </div>

        <div className="my-5">
          <SimilarProperty propertyList={properties} /> {/* Display similar properties */}
        </div>

        <div className="my-5">
          <CTA
            backgroundImage={images.CTAbg}
            headline="Helping you find your dream property in Dubai"
            ctaText="Start Your Journey"
            ctaLink="/contact"
          />
        </div>

        <div className="my-5">
          <Contact /> {/* Display contact information */}
        </div>
      </div>
    </div>
  );
}
