'use client';

import React from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  features: FeatureCardProps[];
  ctaText?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  subtitle,
  title,
  imageSrc,
  features,
  ctaText
}) => {
  return (
    <section className="text-white py-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8">
          <p className="text-white/50 text-sm md:text-base mb-2">{subtitle}</p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${urbanist.className}`}>{title}</h2>
        </div>

        <div className="relative mb-8 md:mb-12">
          {/* Main image */}
          <div className="relative rounded overflow-hidden h-64 sm:h-96 md:h-[480px] lg:h-[600px]">
            <Image
              src={imageSrc}
              alt="Office environment"
              fill
              className="object-cover"
              
            />
          </div>

          {/* Overlay cards container */}
          <div className="mt-6 md:absolute md:bottom-6 md:left-0 md:right-0 mx-4">
            <div className="rounded overflow-hidden bg-[#333333] mx-0 md:mx-4 shadow-lg">
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[48%] lg:w-[23%] p-4 bg-gradient-to-b from-[#222222] to-[#444444] shadow-md rounded-lg flex flex-col"
                  >
                    <div className="mb-3">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="text-yellow-400"
                      />
                    </div>
                    <h6 className="text-yellow-400 font-bold mb-2 text-lg">{feature.title}</h6>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        {/* {ctaText && (
          <div className="flex items-center mt-6 md:mt-8">
            <div className="flex items-center">
              <span className="bg-yellow-400 rounded-full inline-block mr-2 w-2 h-2"></span>
              <span className="text-sm md:text-base">{ctaText}</span>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default WhyChooseUs;