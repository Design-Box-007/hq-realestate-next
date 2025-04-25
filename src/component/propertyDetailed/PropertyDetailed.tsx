"use client";
import React from 'react'

import PropertyPage  from './PropertyHero';
import PropertyInfo  from './PropertyDetailsCard';
import MapSection from '../Common/MapSection';
import { images } from '@/data/assets';
import SimilarProperty from './SimilarProperties';
import CTA from '../Common/Cta';
import Contact from '../Home/Contact/Contact';




export default function PropertyDetailed() {
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
    {/* <div className="position-absolute top-1 start-0 w-100 px-4" style={{ zIndex: 9999 }}>
           <Navbar
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              handleScroll={handleScroll}
            />
        

          </div> */}
          <PropertyPage/>
          <PropertyInfo/>
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
<SimilarProperty/>
<CTA
        backgroundImage={images.CTAbg}
        headline="Helping you find your dream property in Dubai's"
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />
      <Contact/>
    </div>
    </div>
  )
}
