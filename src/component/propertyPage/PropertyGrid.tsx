'use client';

import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import StepNavigation from '../Common/StepNavigation';
import { properties } from '@/data/property';
import PortfolioHeader from '../Common/PortfolioHeader';


const PropertyPortfolio: React.FC = () => {
  const [search, setSearch] = useState('');
  const [currentStep, setCurrentStep] = React.useState(2);
  const totalSteps = 5;

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

 

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-4">
      <div>
        {/* <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-white fs-2 fw-bold">Explore Our Property Portfolio</h1>
          <div className="position-relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control form-control-sm rounded-pill pe-5"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn position-absolute end-0 top-0 text-muted">
              <FaSearch />
            </button>
          </div>
        </div> */}
<PortfolioHeader
  title="Explore Our Property Portfolio"
  showSearch={true}
  searchValue={search}
  onSearchChange={setSearch}
  // Make sure this icon exists in your public or assets folder
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
        <StepNavigation
      currentStep={currentStep}
      totalSteps={totalSteps}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onStepClick={handleStepClick}
    />
      </div>
    </div>
  );
};

export default PropertyPortfolio;
