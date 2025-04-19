'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface RightToLeftRevealProps {
  children: ReactNode;
}

const RightToLeftReveal: React.FC<RightToLeftRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = titleRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={titleRef}
      className={`right-to-left-reveal ${isVisible ? 'animate' : ''}`}
    >
      <span className="rlreveal-content">{children}</span>
    </div>
  );
};

export default RightToLeftReveal;
