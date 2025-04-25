'use client';
import React, { useState } from 'react';
import HeroSection from '../Common/HeroSection/HeroSection';
import Navbar from '../Common/Navbar';
import PropertyPortfolio from './PropertyGrid';
import CTA from '../Common/Cta';
import { images } from '@/data/assets';
import Contact from '../Home/Contact/Contact';


export default function PropertyPage() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
<div className="container-fluid ">

<div className="position-relative">
  <div className="position-absolute top-1 start-0 w-100 px-4" style={{ zIndex: 9999 }}>
         <Navbar
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            handleScroll={handleScroll}
          />
        </div>

        <HeroSection
          title="Discover Your Dream Property in Dubai"
          description='Explore a Curated Selection of Luxury Homes, Apartments, and Investment Opportunities'
          backgroundImage="/property/property.jpg"
          navbarHeight="80px"
          showConsultationButton={false}
        />
      <PropertyPortfolio/>
      <CTA 
        backgroundImage={images.CTAbg}
        headline="Helping you find your dream property in Dubai's"
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />
        <Contact/>

      </div>
    </div>
  );
}
