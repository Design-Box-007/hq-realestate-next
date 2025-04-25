// FeaturedInvestmentAreas.tsx
import React from 'react';
import Image from 'next/image';

interface InvestmentFeature {
  id: string;
  title: string;
  description: string;
}

interface InvestmentArea {
  id: string;
  title: string;
  image: string;
  averageROI: string;
  features: InvestmentFeature[];
  bestInvestmentType: string;
}

interface FeaturedInvestmentAreasProps {
  title: string;
  areas: InvestmentArea[];
}

const FeaturedInvestmentAreas: React.FC<FeaturedInvestmentAreasProps> = ({ title, areas }) => {
  return (
    <div className="w-full  text-white font-poppins mt-12">
  <h2 className="text-2xl md:text-3xl font-medium mb-8">{title}</h2>

  <div className="flex flex-col gap-6">
    {areas.map((area) => (
      <div key={area.id} className="flex flex-col rounded-lg overflow-hidden w-full">
        <div className="relative h-[400px] w-full">
          <img 
            src={area.image} 
            alt={area.title}
            // fill
            className="object-cover"
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
      Dubai's real estate market continues to show strong growth due to consistent demand, limited supply in premium areas, and the city's strategic position as a global business hub. Investors can anticipate annual rental yields of 6-8% on average with potential for significant capital appreciation in developing neighborhoods.
    </p>
  </div>
</div>

  );
};

export default FeaturedInvestmentAreas;

// Example JSON data for the component
export const investmentAreasData = {
  title: "Featured Areas for High ROI Investments",
  areas: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury",
      image: "/images/downtown-dubai.jpg", 
      averageROI: "5-7%",
      features: [
        {
          id: "feature1-1",
          title: "Premium Location",
          description: "Home to Burj Khalifa, Dubai Mall, and premium business hubs."
        },
        {
          id: "feature1-2",
          title: "High Demand",
          description: "High rental demand from expatriates and professionals."
        },
        {
          id: "feature1-3",
          title: "Luxury Amenities",
          description: "Luxury apartments and high-end serviced residences."
        }
      ],
      bestInvestmentType: "High-end apartments & short-term rental properties."
    },
    {
      id: "area2",
      title: "Dubai Marina – Waterfront Living with High Demand",
      image: "/images/dubai-marina.jpg",
      averageROI: "6-8%",
      features: [
        {
          id: "feature2-1",
          title: "Waterfront",
          description: "Iconic waterfront community with beach views."
        },
        {
          id: "feature2-2",
          title: "Rental Demand",
          description: "High demand for both long-term and short-term rentals."
        },
        {
          id: "feature2-3",
          title: "Tourism Appeal",
          description: "Close to attractions making it popular among tourists."
        }
      ],
      bestInvestmentType: "Luxury waterfront apartments & penthouses."
    },
    {
      id: "area3",
      title: "Business Bay – A Rising Financial Hub",
      image: "/images/business-bay.jpg",
      averageROI: "6.5-7.5%",
      features: [
        {
          id: "feature3-1",
          title: "Business District",
          description: "Rapidly growing business district with premium office spaces."
        },
        {
          id: "feature3-2",
          title: "Investment Mix",
          description: "Ideal for investors seeking a mix of residential and commercial opportunities."
        },
        {
          id: "feature3-3",
          title: "Strategic Location",
          description: "Close proximity to Downtown Dubai, attracting business professionals."
        }
      ],
      bestInvestmentType: "High-rise apartments & commercial office spaces."
    },
    {
      id: "area4",
      title: "Jumeirah Village Circle (JVC) – Affordable & High Yielding",
      image: "/images/jvc-dubai.jpg",
      averageROI: "7-9%",
      features: [
        {
          id: "feature4-1",
          title: "Affordable Options",
          description: "One of Dubai's most affordable and high-yielding areas."
        },
        {
          id: "feature4-2",
          title: "Family Community",
          description: "Growing community with family-friendly infrastructure."
        },
        {
          id: "feature4-3",
          title: "Property Variety",
          description: "A mix of villas, townhouses, and mid-rise apartments."
        }
      ],
      bestInvestmentType: "Mid-range apartments & townhouses."
    }
  ]
};

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