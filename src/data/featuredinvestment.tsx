import { InvestmentData } from "@/types";
import { images } from "./assets";


interface InvestmentAreasDataType {
  [key: string]: InvestmentData[];
}

export const investmentAreasData: InvestmentAreasDataType = {
  blog1: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury",
      image: images.AboutHero,
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
  ],
  blog2: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury2",
      image: images.AboutHero,
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
  ],
  blog3: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury3",
      image: images.AboutHero,
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
  ],
  blog4: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury4",
      image: images.AboutHero,
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
  ],
  blog5: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury5",
      image: images.AboutHero,
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
  ],
  blog6: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury6",
      image: images.AboutHero,
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
  ],
  blog7: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury7",
      image: images.AboutHero,
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
  ],
  blog8: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury8",
      image: images.AboutHero,
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
  ],
  blog9: [
    {
      id: "area1",
      title: "Downtown Dubai – The Heart of Luxury9",
      image: images.AboutHero,
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
  ],
};