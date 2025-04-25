import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  // Content options
  title?: string;
  subtitle?: string;
  
  // Background image options
  backgroundImage: string;
  overlay?: boolean;
  overlayOpacity?: number;
  
  // Position for the external navbar
  // This helps with proper spacing if navbar is absolutely positioned
  navbarHeight?: string;
  
  // Consultation button
  showConsultationButton?: boolean;
  consultationButtonText?: string;
  consultationIconSrc?: string;
  consultationLink?: string;
  
  // Additional elements
  additionalElement?: ReactNode;
  
  // Custom classes
  className?: string;
  contentClassName?: string;
}

const Hero3: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.2,
  navbarHeight = '80px', // Adjust based on your navbar height
  showConsultationButton = true,
  consultationButtonText = 'Get Our Consultation',
  consultationIconSrc = '/user-icon.png',
  consultationLink = '#',
  additionalElement,
  className = '',
  contentClassName = '',
}) => {
  return (
    <div className={`hero-section position-relative overflow-hidden rounded-3 ${className}`}>
  {/* Background layer with brightness filter */}
  <div 
    className="position-absolute top-0 start-0 w-100 h-100 brightness-[.40] filter"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0
    }}
  ></div>

  {/* Leave space for navbar if it's positioned absolutely */}
  <div style={{ height: navbarHeight }}></div>

  {/* Content container - for title, subtitle and consultation button */}
  <div className={`position-absolute bottom-0 start-0 p-4 p-md-5 w-100 ${contentClassName}`} style={{ zIndex: 2 }}>
    <div className="row d-flex justify-content-between align-items-end">
      
      {/* Title text on left */}
      <div className="col-12 col-md-7 leading-4">
        {title && (
          <h1 className="display-4 font-medium text-white mb-2">{title}</h1>
        )}
        {subtitle && (
          <h1 className="display-4 font-medium text-white ">{subtitle}</h1>
        )}
      </div>

      {/* Consultation button on right */}
      {showConsultationButton && (
        <div className="col-auto mt-4 mt-md-0 bg-white rounded-4xl py-2 pl-2 pr-4">
       <Link href={consultationLink} className="text-decoration-none d-flex align-items-center">
  <div
    className="bg-gray-200 rounded-circle d-flex align-items-center justify-center overflow-hidden"
    style={{ width: '48px', height: '48px' }}
  >
    <Image 
      src={consultationIconSrc}
      alt="Consultation"
      width={48}
      height={48}
      style={{ objectFit: 'cover' }} // Important
    />
  </div>
  
  <div className="ms-2 text-sm font-medium">
    <span className="d-block  text-gray-800">Get Our</span>
    <span className="text-gray-800">Consultation</span>
  </div>
</Link>

        </div>
      )}

      {/* Additional element if needed */}
      {additionalElement && (
        <div className="mt-3">
          {additionalElement}
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default Hero3;