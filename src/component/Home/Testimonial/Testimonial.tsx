'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Testimonial.css';
import TopToBottomReveal from '../TopToBottomReveal';
import BottomToTopReveal from '../BottomToTopReveal';
import { images } from '@/data/assets';

interface TestimonialData {
  image: string;
  title: string;
  description: string;
  username: string;
}

const testimonials: TestimonialData[] = [
  {
    image: images.PeopleImage1,
    title: "Exceptional Service for Our Dream Home",
    description: `Working with HQRealestates was an exceptional experience from start to finish. Their team demonstrated an impressive level of professionalism and expertise, guiding us through every step of the buying process. The attention to detail and commitment to finding the perfect home for us made all the difference. We couldn’t be happier with our new home and are grateful for their support and dedication.`,
    username: "Jane D",
  },
  {
    image: images.PeopleImage2,
    title: "Seamless Transactions and Outstanding Results",
    description: `I’ve had the pleasure of working with HQRealestates for both buying and selling properties, and each time, they exceeded my expectations. Their market knowledge and strategic approach helped me achieve the best possible outcome in a timely manner. The personalized service and clear communication throughout the transactions made the entire process seamless and stress-free. Highly recommend them to anyone in the real estate market.`,
    username: "Emily R",
  },
  {
    image: images.PeopleImage3,
    title: "Innovative Marketing and Expert Advice",
    description: `The team at HQRealestates truly went above and beyond in helping us sell our property. Their innovative marketing strategies and expert advice ensured that our home was presented in the best light possible. Their responsiveness and thorough understanding of the market helped us secure a great deal. We were impressed by their dedication and would not hesitate to work with them again in the future.`,
    username: "Sarah M",
  },
  // Add more testimonials here
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0 }).then(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        controls.start({ opacity: 1 });
      });
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [controls]);

  const testimonial = testimonials[currentIndex];

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    controls.start({ opacity: 0 }).then(() => controls.start({ opacity: 1 }));
  };

  return (
    <section className="testimonial">
      <h6 className="testimonial-subtitle">
        <span style={{ color: 'var(--primary-color)' }}>
          <img src={images.starsIcon} alt="testimonial" width={24} height={24} />
        </span>
        Testimonial
      </h6>
      <h2 className="testimonial-title">Hear from the Experienced</h2>
      <div className="testimonial-container">
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ duration: 1 }} // Fade duration
          className="row"
        >
          <div className="col-md-5 my-3">
            <TopToBottomReveal>
              <div className="image-container">
                <img src={testimonial.image} alt="Testimonial" className="testimonial-image" width="100%" />
              </div>
            </TopToBottomReveal>
          </div>
          <div className="col-md-7 my-3">
            <BottomToTopReveal>
              <div className="testimonial-content">
                <div className="testimonial-description">{testimonial.description}</div>
                <div className="d-flex align-items-center gap-3">
                  <div className="image-container">
                    <img src={testimonial.image} alt="Testimonial" className="testimonial-profile" />
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="testimonial-username">{testimonial.username}</div>
                    <div className="testimonial-usertitle">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </BottomToTopReveal>
          </div>
        </motion.div>
      </div>
      <div className="indicators w-100 mx-auto d-flex align-items-center mb-5">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
