'use client';
import React from 'react';
import './Footer.css';
import { images } from '@/data/assets';

const Footer: React.FC = () => {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer container-fluid">
      {/* Top Section */}
      <div className="row align-items-center text-white gy-4">
        
        {/* Logo */}
        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
          <img src={images.logo} alt="Housing Quest" className="logo-img" width={100} height={50} />
        </div>

        {/* Navigation Links */}
        <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center gap-3">
          <span className="footer-link" onClick={() => handleScroll('home')}>Home</span>
          <span className="footer-link" onClick={() => handleScroll('about')}>About Us</span>
          <span className="footer-link" onClick={() => handleScroll('service')}>Service</span>
          <span className="footer-link" onClick={() => handleScroll('property')}>Property</span>
          <span className="footer-link" onClick={() => handleScroll('contact')}>Contact</span>
        </div>

        {/* Social Media Icons */}
        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-3">
          <a href="https://www.instagram.com/housingquest?igsh=MTZscXM4dGs1eG5jcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={images.instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://medium.com/@housingquestrealestates" target="_blank" rel="noopener noreferrer">
            <img src={images.mediumIcon} alt="Medium" className="social-icon" />
          </a>
          <a href="https://wa.me/+971563600699" target="_blank" rel="noopener noreferrer">
            <img src={images.whatsappIcon} alt="Whatsapp" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/people/Housing-Quest-Real-Estates/61574138710378/" target="_blank" rel="noopener noreferrer">
            <img src={images.facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://x.com/Hqrealestates" target="_blank" rel="noopener noreferrer">
            <img src={images.xIcon} alt="X" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/106353735/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <img src={images.linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-4">
        <a className="footer-author" href="https://www.pixelpanda.ae/" target="_blank" rel="noopener noreferrer">
          This website is Designed and Developed by <b>The Pixel Panda Technology</b>
        </a>
      </div>
    </div>
  );
};

export default Footer;
