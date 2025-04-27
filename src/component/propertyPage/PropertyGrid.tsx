'use client';

import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import StepNavigation from '../Common/StepNavigation';
import { propertyList } from '@/data/propertyData';
import PortfolioHeader from '../Common/PortfolioHeader';


const PropertyPortfolio: React.FC = () => {
  const [search, setSearch] = useState('');
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 5;

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      scrollToGrid();
    }
  };
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      scrollToGrid();
    }
  };
  
  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    scrollToGrid();
  };
  


  const filteredProperties = propertyList.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );
  const propertiesPerPage = 4; // or any number you want to show per page

const startIndex = (currentStep - 1) * propertiesPerPage;
const endIndex = startIndex + propertiesPerPage;

const paginatedProperties = filteredProperties.slice(startIndex, endIndex);
const scrollToGrid = () => {
  const gridElement = document.getElementById('property-grid');
  if (gridElement) {
    const offset = 80; // adjust this rem to pixel (like 5rem = 80px)
    const topPosition = gridElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  }
};


  return (
    <div className="">
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
       <div id="property-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {paginatedProperties.length > 0 ? (
    paginatedProperties.map((property, index) => (
      <PropertyCard
      key={index}
      {...property}
    />
  ))
) : (
  <div className="col-span-2 text-center text-gray-400 py-10">
    No Properties Available
  </div>
)}
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
