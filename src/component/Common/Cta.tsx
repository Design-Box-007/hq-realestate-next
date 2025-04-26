'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';

interface CTAProps {
  headline?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const CTA: React.FC<CTAProps> = ({
  headline = "Helping you find your dream property in Dubai's",
  backgroundImage,
  ctaText = "Start Your Journey",
  ctaLink = "/contact"
}) => {
  return (
    <>
      {/* Font Import */}
      <Head>
        <link 
          rel="stylesheet" 
          href="https://fonts.cdnfonts.com/css/lufga" 
        />
      </Head>
      
      {/* Main Container with mx-2 */}
      <div className="container-fluid">
        <div className="position-relative overflow-hidden rounded-4 h-100" style={{ minHeight: '420px' }}>
          {/* Background Image */}
          <div className="position-absolute top-0 start-0 w-100 h-100">
            <Image
              src={backgroundImage}
              alt="Dubai Property"
              layout="fill"
              objectFit="cover"
              className="brightness-[0.65]"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4">
            {/* Scroll-triggered Headline */}
            <motion.h1 
              className="text-white text-center fw-semibold display-4 mb-4"
              style={{
                fontFamily: "'Lufga', sans-serif",
                maxWidth: '800px',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {headline}
            </motion.h1>
            
            {/* Scroll-triggered CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href={ctaLink} className='text-decoration-none'>
                <button className="btn bg-white text-dark fw-medium rounded-pill py-3 px-4 d-flex align-items-center">
                  <span>{ctaText}</span>
                  <span className="inline-flex items-center justify-center ml-2 border-1 border-black rounded-full h-5 w-5">
                    <ArrowRight className="h-3 w-3 text-black" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
