"use client";
import React, { useState } from 'react'
import TeamExperts from '../Common/Team/TeamExperts'
import HeroSection from '../Common/HeroSection/HeroSection';
import { images } from '@/data/assets';
import Navbar from '../Common/Navbar';
import CTA from '../Common/Cta';
import MapSection from '../Common/MapSection';
import Contact from '../Home/Contact/Contact';


export default function ExpertsPage() {
      const [showMenu, setShowMenu] = useState(false);
               
                   const handleScroll = (sectionId:string) => {
                       const section = document.getElementById(sectionId);
                       if (section) {
                           section.scrollIntoView({ behavior: 'smooth' });
                       }
                   };
                   const teamData = [
                    {
                      name: "Pintér Beatrix",
                      image: "/team/team-member-1.jpg",
                      position: "Real Estate Advisor",
                      experience: 7,
                      role: "Co-Admin",
                      contactOptions: {
                        phone: true,
                        mail: true,
                        whatsapp: true
                      }
                    },
                    {
                      name: "Balla Daniella",
                      image: "/team/team-member-2.jpg",
                      position: "Senior Agent",
                      experience: 5,
                      role: "Sales Manager",
                      contactOptions: {
                        phone: false,
                        mail: true,
                        whatsapp: false
                      }
                    },
                    {
                      name: "Kelemen Krisztina",
                      image: "/team/team-member-3.jpg",
                      position: "Property Consultant",
                      experience: 3,
                      role: "Investments",
                      contactOptions: {
                        phone: true,
                        mail: false,
                        whatsapp: true
                      }
                    }
                  ];
  return (
    <div className="container-fluid ">
      <div className="position-relative">
      <div className="position-absolute top-1 start-0 w-100 px-4" style={{ zIndex: 9999 }}>

  <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />
</div>
    <HeroSection
        backgroundImage={images.AboutHero}
        title="A Firm of Expertise & "
         subtitle=" Excellence."
        navbarHeight="80px" 
        showConsultationButton={true}
        consultationIconSrc={images.AboutProfile}
        consultationLink="/consultation"
        className="my-3"
      />
   <TeamExperts
        title="Meet the Experts Behind Housing Quest"
        showSearch={true}
        teamMembers={[...teamData, ...teamData]} // Duplicate to show more cards
       /> 
        <CTA 
        backgroundImage={images.CTAbg}
        headline="Helping you find your dream property in Dubai's"
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />
      <div className='my-10'>
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
  ]}/>
  </div>
  <Contact/>
      </div>
      </div>
  )
}
