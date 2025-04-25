'use client';

import React, { useState } from 'react';
import StepNavigation from '../Common/StepNavigation';
// import { PropertyCardProps } from '@/types';
import { properties } from '@/data/property';
import PortfolioHeader from '../Common/PortfolioHeader';
import PropertyCard from '../propertyPage/PropertyCard';


const SimilarProperty: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-4">
      <div>
      <PortfolioHeader
  title="Property Overview"
  showSearch={false}
  iconSrc="/property/Frame.png"
/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              propertyType={property.propertyType}
              price={property.price}
              installmentYears={property.installmentYears}
              initialPayment={property.initialPayment}
              completionDate={property.completionDate}
              contactLinks={property.contactLinks}
              icons={property.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperty;
