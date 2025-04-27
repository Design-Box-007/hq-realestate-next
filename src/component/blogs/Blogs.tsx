'use client';
import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import Hero from '../Common/HeroSection/Hero'
import { images } from '@/data/assets'
import CTA from '../Common/Cta';
import { useGetBlogs } from '@/hooks/useGetBlogs';
import Navbar from '../Common/NavbarMenu';



const Blogs = () => {

  //  const handleScroll = (sectionId:string) => {
  //      const section = document.getElementById(sectionId);
  //      if (section) {
  //          section.scrollIntoView({ behavior: 'smooth' });
  //      }
  //  };

  const { blogs, loading, error } = useGetBlogs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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



        <h4 className='text-[32px] leading-[48px] font-medium font-poppins text-white'>Recent Blogs</h4>
        <BlogCardGrid blogs={blogs} />

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
