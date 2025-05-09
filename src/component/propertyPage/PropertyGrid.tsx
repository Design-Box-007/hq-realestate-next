'use client';

import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import StepNavigation from '../Common/StepNavigation';
import PortfolioHeader from '../Common/PortfolioHeader';
import { useGetProperties } from '@/hooks/useGetProperties';
import { IProperty } from '@/types';
import LoadingScreen from '../Common/LoadingScreen';
import ErrorScreen from '../Common/ErrorScreen';

const PropertyPortfolio: React.FC = () => {
  const [search, setSearch] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const { properties, loading, error } = useGetProperties();

  if (loading) return <LoadingScreen title="Properties are Loading" />;
  if (error) return <ErrorScreen />;

  if (properties.length === 0) {
    return <ErrorScreen title='No Properties Found' />
  }


  const filteredProperties =properties.filter((property:IProperty) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  const propertiesPerPage = 4; // 👈 how many properties per page
  const totalSteps = Math.ceil(filteredProperties.length / propertiesPerPage); // 👈 auto calculate based on filtered list

  const startIndex = (currentStep - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

  const scrollToGrid = () => {
    const gridElement = document.getElementById('property-grid');
    if (gridElement) {
      const offset = 80; // Adjust if needed
      const topPosition = gridElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

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

  return (
    <div>
      <PortfolioHeader
        title="Explore Our Property Portfolio"
        showSearch={true}
        searchValue={search}
        onSearchChange={setSearch}
      />
      
      <div id="property-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedProperties.length > 0 ? (
          paginatedProperties.map((property:IProperty, index) => (
            <PropertyCard key={index} property={property} />
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-400 py-10">
            No Properties Available
          </div>
        )}
      </div>

      {totalSteps > 1 && (
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onStepClick={handleStepClick}
        />
      )}
    </div>
  );
};

export default PropertyPortfolio;
