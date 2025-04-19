'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '@/data/assets';

interface CardData {
  color: string;
  image: any; // You can replace `any` with `StaticImageData` if you import with `next/image`
  name: string;
}

interface CardStackProps {
  cardsData?: CardData[];
  cardWidth?: string;
  cardHeight?: string;
  cardOffset?: number;
  scaleFactor?: number;
  autoSlideInterval?: number;
}


const CardStack: React.FC<CardStackProps> = ({
  cardsData = [
    { color: "#266678", image: images.MaritimeDubai, name: "Downtown Dubai" },
    { color: "#cb7c7a", image: images.DownTownDubai, name: "Bluewaters Dubai" },
    { color: "#36a18b", image: images.PalmJumeirah, name: "Palm Jumeirah" },
  ],
  cardWidth = '90vw',
  cardHeight = '90vh',
  cardOffset = 12,
  scaleFactor = 0.02,
  autoSlideInterval = 5000,
}) => {
  const [cards, setCards] = useState<CardData[]>(cardsData);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveToEnd(0);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [cards, autoSlideInterval]);


  function move(array:CardData[], fromIndex:number, toIndex:number) {
    const newArray = [...array]; // clone the array to avoid mutating the original
    const item = newArray.splice(fromIndex, 1)[0]; // remove the item
    newArray.splice(toIndex, 0, item); // insert it at the new index
    return newArray;
  }

  
  const moveToEnd = (from: number) => {
    setCards((prevCards) => {
      const updatedCards = move(prevCards, from, prevCards.length - 1);
      const newIndex = (activeIndex + 1) % updatedCards.length;
      setActiveIndex(newIndex);
      return updatedCards;
    });
  };

  return (
    <div
      className="my-5"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      {/* Card Stack */}
      <ul
        style={{
          position: 'relative',
          width: cardWidth,
          height: cardHeight,
          listStyle: 'none',
        }}
      >
        {cards.map((card, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={card.color}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: cardWidth,
                height: cardHeight,
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '8px',
                transformOrigin: 'top center',
                listStyle: 'none',
                cursor: canDrag ? 'grab' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
              animate={{
                top: index * -cardOffset,
                scale: 1 - index * scaleFactor,
                zIndex: cards.length - index,
              }}
              drag={canDrag ? 'y' : false}
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1,
                  borderRadius: '8px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                }}
              >
                {card.name}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* Indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {cards.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === activeIndex ? '20px' : '10px',
              height: '10px',
              borderRadius: '50px',
              backgroundColor:
                index === activeIndex ? 'var(--primary-color)' : '#fff',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
