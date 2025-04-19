'use client'
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface TopToBottomRevealProps {
  children: ReactNode;
}

const TopToBottomReveal: React.FC<TopToBottomRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation happens only once
        }
      },
      { threshold: 0.1 }
    );

    const current = titleRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={titleRef}
      className={`top-to-bottom-reveal ${isVisible ? 'tbanimate' : ''}`}
    >
      <div className="tbreveal-content">{children}</div>
    </div>
  );
};

export default TopToBottomReveal;
