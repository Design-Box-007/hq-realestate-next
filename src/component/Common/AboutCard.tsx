'use client';

import React from 'react';
import TopToBottomReveal from '../Home/TopToBottomReveal';


interface AboutCardProps {
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <TopToBottomReveal>
      <div className='about-card'>
        <h4 className='about-card-title'>{title}</h4>
        <p className='about-card-description' dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </TopToBottomReveal>
  );
};

export default AboutCard;
