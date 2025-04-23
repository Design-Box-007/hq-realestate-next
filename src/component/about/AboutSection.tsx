'use client'

import React from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import AboutCard from '../Common/AboutCard';
import { AboutSectionProps } from '@/types';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

interface TeamMemberProps {
  imageSrc: string;
  alt: string;
}

interface StatProps {
  value: string;
  label: string;
  sublabel: string;
}


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

      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Image Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative rounded overflow-hidden" style={{ height: '350px' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="col-md-6">
            <h2 className={`display-4 fw-bold mb-4 ${urbanist.className}`}>{title}</h2>
            <p className="mb-3 text-white">{description}</p>
            <p className="text-white">{subDescription}</p>
            
          </div>
            {/* Team Members */}
            <div className="d-flex align-items-center mt-4">
              <div className="d-flex">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="position-relative rounded-circle border-2 border-dark" 
                    style={{ 
                      width: '42px', 
                      height: '42px', 
                      marginLeft: index > 0 ? '-12px' : '0' 
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
            </div>
        </div>
        
        {/* Stats Row */}
        <div className='row mt-5'>
      <div className='col-md-4'>
        <AboutCard title="25+" description="Years of<br />Experience" />
      </div>
      <div className='col-md-4'>
        <AboutCard title="84%" description="Customer<br />Satisfaction Rate" />
      </div>
      <div className='col-md-4'>
        <AboutCard title="324" description="Exquisite Properties<br />Ready for your" />
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutSection;