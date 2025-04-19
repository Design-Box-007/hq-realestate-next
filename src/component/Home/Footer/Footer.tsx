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
    <div className="footer">
      <div className="d-flex justify-content-between gap-3">
        <div className="d-flex text-white align-items-center gap-2">
          {/* <h1 className='logo m-0'>HQ</h1>
              <p className='logo-name m-0'>Housing <br />Quest</p> */}
          <img src={images.logo} alt="Housing Quest" className='logo-img' width={100} height={50} />
        </div>

        <div className="d-flex gap-2 flex-wrap text-white align-items-center justify-content-evenly w-100">
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('home')}>Home</span>
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('about')}>About Us</span>
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('service')}>Service</span>
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('property')}>Property</span>
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('contact')}>Contact</span>
        </div>

        <div className="d-flex align-items-center gap-3 social-media-icons">
          <a href="https://www.instagram.com/housingquest?igsh=MTZscXM4dGs1eG5jcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={images.instagramIcon} alt="Instagram" width={20} height={20} />
          </a>
          <a href="https://medium.com/@housingquestrealestates" target="_blank" rel="noopener noreferrer">
            <img src={images.mediumIcon} alt="Medium" width={20} height={20} />
          </a>
          <a href="https://wa.me/+971563600699" target="_blank" rel="noopener noreferrer">
            <img src={images.whatsappIcon} alt="Whatsapp" width={20} height={20} />
          </a>
          <a href="https://www.facebook.com/people/Housing-Quest-Real-Estates/61574138710378/" target="_blank" rel="noopener noreferrer">
            <img src={images.facebookIcon} alt="Facebook" width={20} height={20} />
          </a>
          <a href="https://x.com/Hqrealestates" target="_blank" rel="noopener noreferrer">
            <img src={images.xIcon} alt="X" width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/company/106353735/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <img src={images.linkedinIcon} alt="Linkedin" width={20} height={20} />
          </a>
        </div>
      </div>

      <div className="text-center">
        <a className="footer-author" href="https://www.pixelpanda.ae/" target="_blank" rel="noopener noreferrer">
          This website is Designed and Developed by <b>The Pixel Panda Technology</b>
        </a>
      </div>
    </div>
  );
};

export default Footer;
