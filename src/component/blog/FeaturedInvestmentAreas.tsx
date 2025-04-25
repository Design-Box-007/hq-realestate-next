// FeaturedInvestmentAreas.tsx
import { InvestmentData } from '@/types';
import React from 'react';

interface FeaturedInvestmentAreasProps {
  title: string;
  areas: InvestmentData[];
}

const FeaturedInvestmentAreas: React.FC<FeaturedInvestmentAreasProps> = ({ title, areas }) => {
  return (
    <div className="w-full  text-white font-poppins mt-12">
      <h2 className="text-2xl md:text-3xl font-medium mb-8">{title}</h2>

      <div className="flex flex-col gap-6">
        {areas.map((area) => (
          <div key={area.id} className="flex flex-col rounded-lg overflow-hidden w-full min-h-[400px]">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img
                src={area.image}
                alt={area.title}
                // fill
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 space-y-4">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-medium">{area.title}</h3>
                <p className="text-sm text-gray-400">
                  Average ROI: <span className="text-white font-medium">{area.averageROI}</span>
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Why Invest?</p>
                <ul className="space-y-2">
                  {area.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <span className="mr-2 text-[#BD9167] text-sm">•</span>
                      <span className="text-sm text-gray-300">{feature.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm ">
                <span className="text-gray-400">Best Investment Type:</span>{" "}
                <span className="text-white">{area.bestInvestmentType}</span>
              </p>
              <div className='border-b my-4'></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#121212] rounded-lg">
        <h3 className="text-xl font-medium mb-2">Market Insights & Investment Potential</h3>
        <p className="text-sm text-gray-300">
          {" Dubai's real estate market continues to show strong growth due to consistent demand, limited supply in premium areas, and the city's strategic position as a global business hub. Investors can anticipate annual rental yields of 6-8% on average with potential for significant capital appreciation in developing neighborhoods."}
        </p>
      </div>
    </div>

  );
};

export default FeaturedInvestmentAreas;

// Example JSON data for the component


// Usage in Blog.tsx
// Import this component and the data to use after BlogHeader:
/*
import FeaturedInvestmentAreas, { investmentAreasData } from '@/components/FeaturedInvestmentAreas';

// Then in your Blog component render method:
<BlogHeader blog={blogData} />
<FeaturedInvestmentAreas title={investmentAreasData.title} areas={investmentAreasData.areas} />
<Suspense fallback={<div className="flex justify-center py-10"><div className="animate-pulse text-white">Loading blog content...</div></div>}>
    <BlogComponent />
</Suspense>
*/