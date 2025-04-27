'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, ReactNode } from 'react';

interface TopToBottomRevealProps {
  children: ReactNode;
}

const TopToBottomReveal: React.FC<TopToBottomRevealProps> = ({ children }) => {
  const ref = useRef(null);
const inView = useInView(ref, {
  amount: 0.1,  // ✅ This is the new version of threshold
});

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }} // Top to bottom starting point
      animate={controls}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default TopToBottomReveal;
