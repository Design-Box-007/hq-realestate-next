"use client";
import React, { useState } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar'
import Contact from '@/component/Home/Contact/Contact';

export default function ContactPage() {
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
        <Contact/>
    </div>
    </div>
  )
}
