'use client';
import React from 'react';
import './Assistance.css';
import { GoDotFill } from 'react-icons/go';
import { LuCircleArrowLeft, LuCircleArrowRight } from 'react-icons/lu';
import LeftToRightReveal from '../LeftToRightReveal';
import RightToLeftReveal from '../RightToLeftReveal';
import { images } from '@/data/assets';

interface AssistanceItem {
  img: string;
  name: string;
  position: string;
}

const Assistance: React.FC = () => {
  const assistanceData: AssistanceItem[] = [
    {
      img: images.PeopleImage1,
      name: 'Pintér Beatrix',
      position: 'Experience 7 / Co-Admin',
    },
    {
      img: images.PeopleImage2,
      name: 'Balla Daniella',
      position: 'Experience 9 / Deal Manager',
    },
    {
      img: images.PeopleImage3,
      name: 'Kelemen Krisztina',
      position: 'Experience 3 / Representative',
    },
    {
      img: images.PeopleImage1,
      name: 'Pintér Beatrix',
      position: 'Experience 7 / Co-Admin',
    },
  ];

  return (
    <div className="assistance">
      <div className="w-100">
        <LeftToRightReveal>
          <h6 className="explore-subtitle">
            <span style={{ color: 'var(--primary-color)' }}>
              <GoDotFill size={24} />
            </span>
            Find Your Partner
          </h6>
        </LeftToRightReveal>
        <h2 className="assistance-title">Perfect Assistance for your Needs</h2>
        <p className="assistance-description">
          Our team is highly experienced and knowledgeable across all aspects of the real estate industry. We are ready to answer your questions in over 30 languages
        </p>
      </div>

      <form className="assistance-form my-5">
        <input type="text" placeholder="Specialization" className="assistance-form-input" />
        <input type="email" placeholder="Language" className="assistance-form-input" />
        <button type="submit" className="assistance-button">
          Show All{' '}
          <span style={{ color: 'var(--primary-color)' }}>
            <LuCircleArrowRight />
          </span>
        </button>
      </form>

      <RightToLeftReveal>
        <div className="assistance-grid-wrapper">
          <div className="assistance-grid">
            {assistanceData.map((item, index) => (
              <div key={index} className="assistance-grid-item">
                <img
                  src={item.img}
                  alt="assistance image"
                  className="assistance-image"
                  width="100%"
                  height="100%"
                />
                <div className="assistance-grid-item-content">
                  <div className="d-flex align-items-end gap-2 mb-2">
                    <h5 className="assistance-name">{item.name}</h5>
                    <p className="assistance-position">{item.position}</p>
                  </div>
                  <div className="assistance-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </RightToLeftReveal>

      <div className="d-flex align-items-center gap-2">
        <span style={{ color: 'var(--primary-color)' }}>
          <LuCircleArrowLeft size={24} />
        </span>
        <div className="scroll-text">Scroll On</div>
        <div className="scroll-line" />
        <span style={{ color: 'var(--primary-color)' }}>
          <LuCircleArrowRight size={24} />
        </span>
      </div>
    </div>
  );
};

export default Assistance;
