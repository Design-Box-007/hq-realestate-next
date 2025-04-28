'use client';

import React from 'react';
// import StepNavigation from '../Common/StepNavigation';
// import { PropertyCardProps } from '@/types';
import PortfolioHeader from '../Common/PortfolioHeader';
import PropertyCard from '../propertyPage/PropertyCard';
import { IProperty } from '@/types';


const SimilarProperty: React.FC<{ propertyList: IProperty[] }> = ({ propertyList }) => {

  const limitedProperties = propertyList.slice(0, 2);

  return (
    <div className="py-4">
      <div>
        <PortfolioHeader
          title="Similar Properties you may Like"
          showSearch={false}
          iconSrc="/property/Frame.png"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {limitedProperties.map((property: IProperty, index: number) => (
            <PropertyCard
              key={index}
              property={property}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperty;
