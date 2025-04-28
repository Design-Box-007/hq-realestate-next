"use client";
import React from 'react'
import HeroSection from '../HeroSection/HeroSection'

import Contact from '@/component/Home/Contact/Contact';
import Navbar from '../NavbarMenu';

export default function ContactPage() {

  return (
    <div className="container-fluid relat">
      <div className="position-relative">
        <div>
          <Navbar isAbsolute={true} />
        </div>

        <HeroSection
          title="Discover Your Dream Property in Dubai"
          description='Explore a Curated Selection of Luxury Homes, Apartments, and Investment Opportunities'
          backgroundImage="/contact/contact.jpg"
          navbarHeight="80px"
          showConsultationButton={false}
        />
        <Contact />
      </div>
    </div>
  )
}
