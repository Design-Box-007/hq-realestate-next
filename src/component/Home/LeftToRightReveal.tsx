'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface LeftToRightRevealProps {
  children: ReactNode;
}

const LeftToRightReveal: React.FC<LeftToRightRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
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
      className={`left-to-right-reveal ${isVisible ? 'animate' : ''}`}
    >
      <span className="reveal-content">{children}</span>
    </div>
  );
};

export default LeftToRightReveal;
