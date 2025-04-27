'use client';
import React from 'react';
import TeamExperts from '../Common/Team/TeamExperts';
import HeroSection from '../Common/HeroSection/HeroSection';
import { images } from '@/data/assets';
// import Navbar from '../Common/Navbar';
import CTA from '../Common/Cta';

import Contact from '../Home/Contact/Contact';
import Navbar from '../Common/NavbarMenu';
import LocationSection from '../Common/MapSection';

export default function ExpertsPage() {
  // const [showMenu, setShowMenu] = useState(false);

  //              const handleScroll = (sectionId:string) => {
  //                  const section = document.getElementById(sectionId);
  //                  if (section) {
  //                      section.scrollIntoView({ behavior: 'smooth' });
  //                  }
  //              };

  // const teamData = [
  //   {
  //     name: "Pintér Beatrix",
  //     image: "/team/team-member-1.jpg",
  //     position: "Real Estate Advisor",
  //     experience: 7,
  //     role: "Co-Admin",
  //     contactOptions: {
  //       phone: true,
  //       mail: true,
  //       whatsapp: true
  //     }
  //   },
  //   {
  //     name: "Balla Daniella",
  //     image: "/team/team-member-2.jpg",
  //     position: "Senior Agent",
  //     experience: 5,
  //     role: "Sales Manager",
  //     contactOptions: {
  //       phone: false,
  //       mail: true,
  //       whatsapp: false
  //     }
  //   },
  //   {
  //     name: "Kelemen Krisztina",
  //     image: "/team/team-member-3.jpg",
  //     position: "Property Consultant",
  //     experience: 3,
  //     role: "Investments",
  //     contactOptions: {
  //       phone: true,
  //       mail: false,
  //       whatsapp: true
  //     }
  //   }
  // ];

  return (
    <div className="container-fluid">
      <div className="position-relative">
        {/* Hero Section */}
        <div className="hero-section mb-5">
          <Navbar isAbsolute={true} />
          <HeroSection
            backgroundImage='/about/expert.jpg'
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
        <LocationSection
      title="Give Us a Visit"
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
        </div>

        {/* Contact Section */}
        <div className="contact-section my-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}
