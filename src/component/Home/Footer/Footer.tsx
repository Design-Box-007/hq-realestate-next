'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { images } from '@/data/assets';

const Footer: React.FC = () => {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#222222] py-8 px-4 md:px-8 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src={images.logo}
                alt="Housing Quest"
                className="logo-img object-cover"
                width={100}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {['home', 'about', 'service', 'property', 'contact'].map((section) => (
              <button 
                key={section}
                className="text-white font-urbanist hover:text-[#BF9D5B] transition-colors text-sm"
                onClick={() => handleScroll(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 ">
            <Link href="https://www.instagram.com/housingquest?igsh=MTZscXM4dGs1eG5jcA%3D%3D&utm_source=qr" target="_blank" className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaInstagram size={18} />
            </Link>
            <Link href="https://medium.com/@housingquestrealestates" target="_blank"
            className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaMediumM size={18} />
            </Link>
            <Link href="https://wa.me/+971563600699" target="_blank"
            className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaWhatsapp size={18} />
            </Link>
            <Link href="https://www.facebook.com/people/Housing-Quest-Real-Estates/61574138710378/" target="_blank"
            className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaFacebook size={18} />
            </Link>
            <Link href="https://x.com/Hqrealestates" target="_blank"
            className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaXTwitter size={18} />
            </Link>
            <Link href="https://www.linkedin.com/company/106353735/admin/dashboard/" target="_blank" className='!text-[#BF9D5B] !hover:text-white transition-colors'>
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#444444] mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs ">
          <div className="font-now">
            <Link href="/terms" className="hover:text-[#BF9D5B] text-decoration-none !text-gray-400 transition-colors no-underline">
              Terms & Services
            </Link>
          </div>

          <div className="mt-4 md:mt-0 font-now flex items-center">
            <Link href="/conditions" className="hover:text-[#BF9D5B] text-decoration-none transition-colors !text-gray-400 no-underline">
              Conditions
            </Link>
            <span className="mx-4">|</span>
            <Link href="/privacy" className="hover:text-[#BF9D5B] text-decoration-none transition-colors !text-gray-400 no-underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
