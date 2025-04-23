'use client';
import React, { useState } from 'react'
import BlogCardGrid from './BlogCardGrid'
import { blogListData } from '@/data/blogs'

import Hero from '../Common/HeroSection/Hero'
import { images } from '@/data/assets'
import Navbar from '../Common/Navbar'
import CTA from '../Common/Cta';


const Blogs = () => {
    const [showMenu, setShowMenu] = useState(false);
   
       const handleScroll = (sectionId:string) => {
           const section = document.getElementById(sectionId);
           if (section) {
               section.scrollIntoView({ behavior: 'smooth' });
           }
       };
    return (
        <section>
              {/* <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />     */}
       
        <div className="p-[10px] md:p-3 lg:p-5 space-y-10">
      
    
<Hero
  featured={true}
  subheading="Featured"
  heading="Illuminating Ideas: Explore the World of LED Displays"
  content="Discover insights, trends, and solutions for events, advertising, and beyond."
  bgImage={images.BlogHero}
//   onNavigate={''}
/>



            <h4 className='text-[32px] leading-[48px] font-medium font-poppins text-white'>Recent Blogs</h4>
            <BlogCardGrid blogs={blogListData} />

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
