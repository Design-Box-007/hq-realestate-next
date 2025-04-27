'use client';
import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import Hero from '../Common/HeroSection/Hero'
import { images } from '@/data/assets'
import CTA from '../Common/Cta';
import blogListDataV2 from '@/data/blog-v2';
import Navbar from '../Common/NavbarMenu';


const Blogs = () => {

    //  const handleScroll = (sectionId:string) => {
    //      const section = document.getElementById(sectionId);
    //      if (section) {
    //          section.scrollIntoView({ behavior: 'smooth' });
    //      }
    //  };
  return (
    <section>
      
      <Navbar/>
      <div className="p-[10px] md:p-3 lg:p-5 space-y-10">


        <Hero
          featured={true}
          subheading="Featured"
          heading="Illuminating Ideas: Explore the World of LED Displays"
          content="Discover insights, trends, and solutions for events, advertising, and beyond."
          bgImage={images.BlogHero}
        />


      <div className='my-5'>
        <h4 className='text-[32px] leading-[48px] font-medium font-poppins text-white mt-3'>Recent Blogs</h4>
        <BlogCardGrid blogs={blogListDataV2} />
        </div>
        <CTA
          backgroundImage={images.CTAbg}
          headline="Helping you find your dream property in Dubai's"
          ctaText="Start Your Journey"
          ctaLink="/contact"
        />
      </div>
    </section>
  )
}

export default Blogs


//
