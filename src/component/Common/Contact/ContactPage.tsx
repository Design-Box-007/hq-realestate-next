"use client";
import React, { useState } from 'react'
import HeroSection from '../HeroSection/HeroSection'

import Contact from '@/component/Home/Contact/Contact';
import Navbar from '../NavbarMenu';

export default function ContactPage() {
  
  return (
    <div className="container-fluid ">
<Navbar isAbsolute={true} />
    <div className="position-relative">
  
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
