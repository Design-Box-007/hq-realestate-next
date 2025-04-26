"use client";
import React, { useState } from 'react';
// import Navbar from '@/component/Common/Navbar';
import HeroSection from '@/component/Common/HeroSection/HeroSection';
import { images } from '@/data/assets';
import AboutSection from './AboutSection';
import Contact from '../Home/Contact/Contact';
import MapSection from '../Common/MapSection';
import WhyChooseUs from './WhyChooseUs';
import TeamExperts from '../Common/Team/TeamExperts';
import Navbar from '../Common/NavbarMenu';





export default function AboutPage() {
    // const [showMenu, setShowMenu] = useState(false);
       
    //        const handleScroll = (sectionId:string) => {
    //            const section = document.getElementById(sectionId);
    //            if (section) {
    //                section.scrollIntoView({ behavior: 'smooth' });
    //            }
    //        };
 
           const features = [
            {
              iconSrc: "/icons/a-icon1.png",
              title: "10+ Years of Industry Experience",
              description: "Built on a decade of knowledge, insight, and results in real estate across multiple markets."
            },
            {
              iconSrc: "/icons/a-icon2.png",
              title: "Tailored Property Solutions",
              description: "Personalized buying, selling, and leasing strategies based on your goals, budget, and lifestyle."
            },
            {
              iconSrc: "/icons/a-icon3.png",
              title: "Off-Plan Investment Advisory",
              description: "Access to top-tier under-construction projects with flexible payment plans and high growth potential."
            },
            {
              iconSrc: "/icons/a-icon4.png",
              title: "Client-Centric Service",
              description: "We measure success by client satisfaction—delivering honest, strategic, and responsive support at every step."
            }
          ];
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
                <Navbar isAbsolute={true} />
          
                {/* Hero Section */}
                <div className="mb-20">
                  <HeroSection
                    backgroundImage={images.AboutHero}
                    title="A Decade of Expertise."
                    subtitle="A Future of Excellence."
                    navbarHeight="80px"
                    showConsultationButton={true}
                    consultationIconSrc={images.AboutProfile}
                    consultationLink="/contact"
                    className="my-3"
                  />
                </div>
          
                {/* About Section */}
                <div className="my-5">
                  <AboutSection
                    title="Who We Are"
                    description="Housing Quest is a full-service real estate agency rooted in over a decade of industry experience. With our beginnings in India's competitive property market, we've expanded our operations to the heart of the UAE—Dubai, one of the world's most dynamic real estate hubs."
                    subDescription="Our approach combines cutting-edge market insights, tailored solutions, and a client-first philosophy. Whether you're buying your first home, selling a luxury villa, or investing in off-plan developments, we are committed to making the experience seamless, profitable, and personal."
                    imageSrc={images.About2}
                    imageAlt="Luxury Apartment Interior"
                    teamMembers={[
                      { imageSrc: "/about/profile.png", alt: "Team Member 1" },
                      { imageSrc: "/about/profile.png", alt: "Team Member 2" },
                      { imageSrc: "/about/profile.png", alt: "Team Member 3" },
                      { imageSrc: "/about/profile.png", alt: "Team Member 4" },
                    ]}
                  />
                </div>
          
                {/* Why Choose Us Section */}
                <div className="my-5">
                  <WhyChooseUs
                    subtitle="Our Expertise"
                    title="Why Clients Choose Housing Quest"
                    imageSrc="/about/about3.jpg"
                    features={features}
                  />
                </div>
          
                {/* Team Experts Section */}
                <div className="my-5">
                  <TeamExperts
                    title="Meet the Experts Behind Housing Quest"
                    description="Our dedicated professionals bring deep market knowledge, personalized service, and a passion for helping you make the right real estate decisions in Dubai."
                    showSearch={false}
                    teamMembers={teamData}
                  />
                </div>
          
                {/* Map Section */}
                <div className="my-5">
                  <MapSection
                    mapImage={images.mapImage}
                    officeImage={images.OfficeImage}
                    locationIcon={images.locationIcon}
                    title="Give Us a Visit"
                    addressLines={[
                      '814, Burlington Towers, Business Bay, Dubai UAE',
                    ]}
                  />
                </div>
          
                {/* Contact Section */}
                <div className="my-5">
                  <Contact />
                </div>
              </div>
            </div>
          );
          
}