'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface BottomToTopRevealProps {
  children: ReactNode;
}

const BottomToTopReveal: React.FC<BottomToTopRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

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

    const currentRef = elementRef.current;

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
      ref={elementRef}
      className={`bottom-to-top-reveal ${isVisible ? 'btbanimate' : ''}`}
    >
      <div className="btreveal-content">{children}</div>
    </div>
  );
};

export default BottomToTopReveal;
