'use client';

import React from 'react';
// import StepNavigation from '../Common/StepNavigation';
// import { PropertyCardProps } from '@/types';
import PortfolioHeader from '../Common/PortfolioHeader';
import PropertyCard from '../propertyPage/PropertyCard';
import { propertyList } from '@/data/propertyData';


const SimilarProperty: React.FC = () => {
  // const [search, setSearch] = useState('');

  // const filteredProperties = properties.filter((property) =>
  //   property.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="py-4">
      <div>
        <PortfolioHeader
          title="Property Overview"
          showSearch={false}
          iconSrc="/property/Frame.png"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {propertyList.map((property, index) => (
            <PropertyCard
              key={index}
              images={property.images}
              title={property.title}
              propertyType={property.propertyType}
              price={property.price}
              installmentYears={property.installmentYears}
              initialPayment={property.initialPayment}
              completionDate={property.completionDate}
              contactLinks={property.contactLinks}
              id={property.id}
              thumbnails={property.thumbnails}
              ameneties={property.ameneties}
              propertyName={property.title}
              propertyLocation={property.propertyLocation}
              description={property.description}
              bedrooms={property.bedrooms}
              area={property.area}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperty;
