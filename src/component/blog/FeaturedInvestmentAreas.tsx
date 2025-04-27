'use client';

import { IBlog, IInvestmentData } from '@/types';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedInvestmentAreasProps {
  title: IBlog['blog_subtitle'];
  areas: IInvestmentData[];
  marketInsights: IBlog['market_insights'];
}

const FeaturedInvestmentAreas: React.FC<FeaturedInvestmentAreasProps> = ({ title, areas, marketInsights }) => {
  return (
    <div className="w-full text-white font-poppins mt-12">
      <h2 className="text-5xl md:text-3xl font-medium mb-5">{title}</h2>

      <div className="flex flex-col gap-6">
        {areas.map((area: IInvestmentData, index: number) => (
          <div key={index} className="flex flex-col rounded-lg overflow-hidden w-full min-h-[400px]">
            
            {/* Image Animation - Right to Left */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src={area.investment_cover_image}
                alt={area.investment_title}
                width={1386}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Content Animation - Left to Right */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              transition={{ duration: 4, ease: 'easeInOut'}}
              viewport={{ once: true }}
              className="py-4 space-y-4"
            >
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-medium">{area.investment_title}</h3>
                <p className="text-lg text-white">
                  Average ROI: <span className="text-white font-medium">{area.average_roi}</span>
                </p>
              </div>

              <div>
                <p className="text-lg font-medium text-white mb-2">Why Invest?</p>
                <ul className="space-y-2">
                  {area.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-white text-lg">•</span>
                      <span className="text-lg text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg">
                <span className="text-white">Best Investment Type:</span>{" "}
                <span className="text-white">{area.best_investment_type}</span>
              </p>
              <div className="border-b my-2 pt-4"></div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Market Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="rounded-lg mt-10"
      >
        <h3 className="text-xl font-medium mb-2">Market Insights & Investment Potential</h3>
        <p className="text-lg text-white">
          {marketInsights}
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturedInvestmentAreas;
