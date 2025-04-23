"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/component/Common/Navbar';
import HeroSection from '@/component/Common/HeroSection/HeroSection';



export default function HomePage() {
    const [showMenu, setShowMenu] = useState(false);
       
           const handleScroll = (sectionId:string) => {
               const section = document.getElementById(sectionId);
               if (section) {
                   section.scrollIntoView({ behavior: 'smooth' });
               }
           };
  // Example of the consultation button element from the first image
  const consultationButton = (
    <div className="d-flex align-items-center">
      <Link href="/consultation" className="text-decoration-none">
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center p-2" style={{ width: '50px', height: '50px' }}>
          <Image 
            src="/user-icon.png" 
            alt="User" 
            width={20} 
            height={20} 
          />
        </div>
        <div className="ms-2">
          <small className="text-white">Get Our</small>
          <p className="mb-0 text-white">Consultation</p>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="container-fluid p-4 bg-dark">
      <div className="row mb-4">
        <div className="col-12">
          <h5 className="text-white-50">About us</h5>
        </div>
        <div className="col-12">
          {/* First Hero - Office Space */}
          <div className="position-relative">
            {/* Your navbar can be placed here if needed */}
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />  
            
            <HeroSection
              backgroundImage="/images/office-space.jpg"
              title="A Decade of Expertise."
              subtitle="A Future of ."
              overlay={true}
              overlayOpacity={0.2}
              contentPosition="left"
              contentVerticalAlign="bottom"
              additionalElement={consultationButton}
              className="p-0"
            />
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <h5 className="text-white-50">Services</h5>
        </div>
        <div className="col-12">
          {/* Second Hero - Dubai Skyline */}
          <div className="position-relative">
            {/* Your navbar can be placed here if needed */}
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />  
            
            <HeroSection
              backgroundImage="/images/dubai-skyline.jpg"
              title="Tailored Real Estate Services for Your Needs"
              description="Explore a Curated Selection of Luxury Homes, Apartments, and Investment Opportunities"
              overlay={true}
              overlayOpacity={0.2}
              contentPosition="left"
              contentVerticalAlign="bottom"
              showLogo={true}
              logo="/images/hq-logo.png"
              logoAlt="Housing Quest Logo"
              className="p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}