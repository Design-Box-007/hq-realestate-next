'use client'
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface VisibleRevealProps {
  children: ReactNode;
}

const VisibleReveal: React.FC<VisibleRevealProps> = ({ children }) => {
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

    const refCurrent = titleRef.current;

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={titleRef}
      className={`visible-reveal ${isVisible ? 'vbanimate' : ''}`}
    >
      {children}
    </div>
  );
};

export default VisibleReveal;
