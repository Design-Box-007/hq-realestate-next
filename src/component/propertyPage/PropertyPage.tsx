'use client';
import React  from 'react';
import HeroSection from '../Common/HeroSection/HeroSection';

import PropertyPortfolio from './PropertyGrid';
import CTA from '../Common/Cta';
import { images } from '@/data/assets';
import Contact from '../Home/Contact/Contact';
import Navbar from '../Common/NavbarMenu';


export default function PropertyPage() {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleScroll = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    
<div className="container-fluid ">

<div className="position-relative">
    <Navbar isAbsolute={true}/>

        <HeroSection
          title="Discover Your Dream Property in Dubai"
          description='Explore a Curated Selection of Luxury Homes, Apartments, and Investment Opportunities'
          backgroundImage="/property/property.jpg"
          navbarHeight="80px"
          showConsultationButton={false}
        />
      <PropertyPortfolio/>
      <div className='my-5'>
      <CTA 
        backgroundImage={images.CTAbg}
        headline="Helping you find your dream property in Dubai's"
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />
      </div>
        <Contact/>

      </div>
    </div>
  );
}
