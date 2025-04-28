'use client';

import React from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { images } from '@/data/assets';
import Link from 'next/link';
import LeftToRightReveal from '../Home/LeftToRightReveal';

interface NavbarProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ showMenu, setShowMenu, handleScroll }) => {
  return (
    <div className='d-flex justify-content-between align-items-start space-y-5 space-x-10'>
      <LeftToRightReveal>
        <Link href={'/'}>
          {/* Logo */}
          <img
            src={images.logo}
            // className='logo-img'
            alt='Housing Quest'
            width={100}
            height={50}
          />
        </Link>
      </LeftToRightReveal>

      <div className='d-flex text-white align-items-center gap-2'>
        {/* Map Icon */}
        <LeftToRightReveal>
          <span style={{ cursor: 'pointer' }} onClick={() => handleScroll('map')}>
            <img className='icon' src={images.mapIcon} alt='map' />
          </span>
        </LeftToRightReveal>

        {/* Menu Toggle */}
        <div className='header-menu'>
          <LeftToRightReveal>
            <span style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <IoClose size={30} style={{ margin: 0 }} />
              ) : (
                <IoIosMenu size={30} style={{ margin: 0 }} />
              )}
            </span>
          </LeftToRightReveal>

          {/* Navigation Links */}
          <ul
            className={`header-menu-items ${showMenu ? 'active' : ''}`}
            style={{
              display: showMenu ? 'block' : 'none', // Show only when showMenu is true
            }}
          >
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/property', label: 'Property' },
              // { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
              { href: '/blogs', label: 'Blog' },
              { href: '/experts', label: 'Experts' },

            ].map(({ href, label }) => (
              <li key={label} className='mb-[5px]'>
                <Link
                  href={href}
                  className='text-white text-decoration-none hover:text-gray-400 transition-colors duration-200'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
