'use client';

import React from 'react';

interface MapSectionProps {
  mapImage: string;
  officeImage: string;
  locationIcon: string;
  title: string;
  addressLines: string[];
}

import VisibleReveal from '../Home/VisibleReveal';
import LeftToRightReveal from '../Home/LeftToRightReveal';

const MapSection: React.FC<MapSectionProps> = ({
  mapImage,
  officeImage,
  locationIcon,
  title,
  addressLines,
}) => {
  return (
    <section id="map" className="map">
      <VisibleReveal>
        <div className="map-image-container">
          <img src={mapImage} alt="Map Image" className="map-image" width="100%" height="100%" />
          <div className="map-content">
            <div className="d-sm-flex gap-5 justify-content-between">
              <div>
                <LeftToRightReveal>
                  <div className="d-flex flex-column">
                    <h2 className="map-title">{title}</h2>
                    {addressLines.map((line, index) => (
                      <p key={index} className="map-address">
                        {index === 0 && (
                          <img src={locationIcon} alt="Location Icon" width={20} height={20} className="me-2" />
                        )}
                        {line}
                      </p>
                    ))}
                  </div>
                </LeftToRightReveal>
              </div>
              <LeftToRightReveal>
                <div className="d-flex flex-column justify-content-end align-items-end">
                  <div className="office-image-container mt-5">
                    <img src={officeImage} alt="Office Image" className="office-image" width="100%" height="100%" />
                  </div>
                </div>
              </LeftToRightReveal>
            </div>
          </div>
        </div>
      </VisibleReveal>
    </section>
  );
};

export default MapSection;
