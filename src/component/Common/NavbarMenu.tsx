'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { images } from '@/data/assets'; // make sure this import path is correct
import LeftToRightReveal from '../Home/LeftToRightReveal';

interface NavbarProps {
  isAbsolute?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAbsolute = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Property', href: '/property' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Experts', href: '/experts' },
    { name: 'properties', href: '/properties' },
  ];

  return (
    <header
      className={`w-full ${isAbsolute ? 'absolute' : 'relative'} transition-all duration-300 z-50`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-start space-x-10">

        {/* Logo */}
        <LeftToRightReveal>
          <div className="flex items-center">
            <img
              src={images.logo}
              alt="Housing Quest"
              className="logo-img"
              width={100}
              height={50}
            />
          </div>
        </LeftToRightReveal>

        {/* Map Icon and Menu */}
        <div className="flex text-white items-center gap-4">
          <LeftToRightReveal>
            {/* Map Icon */}
            <span style={{ cursor: 'pointer' }}>
              <img src={images.mapIcon} alt="map" className="icon" />
            </span>
          </LeftToRightReveal>

          {/* Menu Toggle */}
          <div className="relative">
            <LeftToRightReveal>
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? (
                  <IoClose size={30} style={{ margin: 0 }} />
                ) : (
                  <IoIosMenu size={30} style={{ margin: 0 }} />
                )}
              </button>
            </LeftToRightReveal>

            {/* Navigation Links */}
            <ul
              className={`
    bg-black 
    absolute 
    right-1 
    w-32
    rounded-lg
    shadow-lg
    py-4
    my-4
    text-center
    transform
    transition-all
    duration-300
   Class	Meaning
ps-0
    ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
  `}
            >
              {navLinks.map((link) => (
                <li key={link.name} className="mx-auto  py-0 hover:bg-gray-900">
                  <Link
                    href={link.href}
                    className="text-white block text-decoration-none w-full text-center hover:text-[#c9a87c] transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
