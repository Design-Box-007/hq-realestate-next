import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onStepClick?: (step: number) => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onStepClick,
}) => {
  return (
    <div className="flex items-center justify-between w-full bg-[#171717] text-white px-4 py-3 my-6">
      {/* Previous button */}
      <button 
  onClick={(e) => { e.preventDefault(); onPrevious(); }}
  className="flex items-center text-sm hover:text-gray-300 transition-colors"
>

        <ChevronLeft size={16}  className='text-[#EDBE8C] '/>
        <span>Preview</span>
      </button>

      {/* Step indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <button
          key={i}
          onClick={(e) => { 
            e.preventDefault(); 
            onStepClick?.(i + 1); 
          }}
            className={`w-6 h-6 rounded flex items-center justify-center text-xs
              ${i + 1 === currentStep 
                ? 'bg-[#EDBE8C] text-black font-medium' 
                : i + 1 < currentStep 
                  ? 'bg-white text-black' 
                  : 'bg-gray-600 text-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
        <span className="text-sm text-gray-400 ml-2">of {totalSteps}</span>
      </div>

      {/* Next button */}
      <button 
  onClick={(e) => { e.preventDefault(); onNext(); }}
  className="flex items-center text-sm hover:text-gray-300 transition-colors"
>

        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};



export default StepNavigation;