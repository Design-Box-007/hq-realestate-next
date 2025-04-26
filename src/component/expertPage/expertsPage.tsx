'use client';
import React from 'react';
import TeamExperts from '../Common/Team/TeamExperts';
import HeroSection from '../Common/HeroSection/HeroSection';
import { images } from '@/data/assets';
// import Navbar from '../Common/Navbar';
import CTA from '../Common/Cta';
import MapSection from '../Common/MapSection';
import Contact from '../Home/Contact/Contact';
import Navbar from '../Common/NavbarMenu';

export default function ExpertsPage() {
  // const [showMenu, setShowMenu] = useState(false);

  //              const handleScroll = (sectionId:string) => {
  //                  const section = document.getElementById(sectionId);
  //                  if (section) {
  //                      section.scrollIntoView({ behavior: 'smooth' });
  //                  }
  //              };

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
    <div className="container-fluid">
      <div className="position-relative">
        {/* Hero Section */}
        <div className="hero-section mb-5">
          <Navbar isAbsolute={true} />
          <HeroSection
            backgroundImage={images.AboutHero}
            title="A Firm of Expertise & "
            subtitle="Excellence."
            navbarHeight="80px"
            showConsultationButton={true}
            consultationIconSrc={images.AboutProfile}
            consultationLink="/contact"
          />
        </div>

        {/* Team Section */}
        <div className="team-section my-5">
          <TeamExperts
            title="Meet the Experts Behind Housing Quest"
            showSearch={true}
            teamMembers={[...teamData, ...teamData]} // Duplicate to show more cards
          />
        </div>

        {/* CTA Section */}
        <div className="cta-section my-5">
          <CTA
            backgroundImage={images.CTAbg}
            headline="Helping you find your dream property in Dubai's"
            ctaText="Start Your Journey"
            ctaLink="/contact"
          />
        </div>

        {/* Map Section */}
        <div className="map-section my-5">
          <MapSection
            mapImage={images.mapImage}
            officeImage={images.OfficeImage}
            locationIcon={images.locationIcon}
            title="Give Us a Visit"
            addressLines={[
              '814, Burlington Towers, Business Bay, Dubai UAE',
              // 'info@hqrealestates.com',
              // '+971 544040799',
              // '+971 563600699',
              // '044-580777',
            ]}
          />
        </div>

        {/* Contact Section */}
        <div className="contact-section my-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}
