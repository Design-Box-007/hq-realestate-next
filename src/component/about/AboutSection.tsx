'use client';

import React from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import AboutCard from '../Common/AboutCard';
import { AboutSectionProps } from '@/types';
import { motion } from 'framer-motion'; // import motion

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  subDescription,
  imageSrc,
  imageAlt,
  teamMembers,
}) => {
  return (
    <section
      className="text-white py-12 px-4 md:py-16 md:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #222222 0%, #0F0F0F 100%)',
      }}
    >
      <div className="">
        <div className="row align-items-center mb-5">
          {/* Image Column with animation */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div
              className="position-relative rounded overflow-hidden"
              style={{ height: '350px' }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </motion.div>

          {/* Content Column with animation */}
          <motion.div
            className="col-md-6"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={`display-4 fw-bold mb-4 ${urbanist.className}`}>{title}</h2>
            <p className="mb-3 text-white">{description}</p>
            <p className="text-white">{subDescription}</p>

           
          </motion.div>
           {/* Team Members with animation */}
           <motion.div
              className="d-flex align-items-center mt-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="d-flex">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="position-relative rounded-circle border-2 border-dark"
                    style={{
                      width: '42px',
                      height: '42px',
                      marginLeft: index > 0 ? '-12px' : '0',
                    }}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-circle"
                    />
                  </div>
                ))}
              </div>
              <div className="ms-3">
                <p className="mb-0 small fw-medium">Meet Our</p>
                <p className="mb-0 small">Professional Team</p>
              </div>
            </motion.div>
        </div>


        {/* Stats Row without animation */}
        <div className="row mt-5">
          <div className="col-md-4">
            <AboutCard title="25+" description="Years of<br />Experience" />
          </div>
          <div className="col-md-4">
            <AboutCard title="84%" description="Customer<br />Satisfaction Rate" />
          </div>
          <div className="col-md-4">
            <AboutCard title="324" description="Exquisite Properties<br />Ready for your" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
