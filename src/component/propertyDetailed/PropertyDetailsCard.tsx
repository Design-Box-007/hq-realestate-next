// PropertyDetailsCard.tsx
import React from 'react';
import { MapPin, Home, Share, Bookmark, Menu, Baby, Waves, ShoppingBag, AirVent, Shield, Car, Dumbbell, Building, PawPrint, Sliders } from 'lucide-react';
import ConsultationButton from '../Common/ConsultationBtn';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

interface PropertyDetails {
  title: string;
  propertyType: string;
  description: string;
  price: number;
  installmentYears: number;
  initialPayment: number;
  bedrooms: number;
  area: {
    value: number;
    unit: string;
  };
  amenities: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
}

interface PropertyDetailsCardProps {
  property: PropertyDetails;
}

export function PropertyDetailsCard({ property }: PropertyDetailsCardProps) {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 18, className: "text-[#BD9167]" };
    
    switch (iconName) {
      case 'child': return <Baby {...iconProps} />;
      case 'waves': return <Waves {...iconProps} />;
      case 'shopping-bag': return <ShoppingBag {...iconProps} />;
      case 'air-vent': return <AirVent {...iconProps} />;
      case 'shield': return <Shield {...iconProps} />;
      case 'car': return <Car {...iconProps} />;
      case 'dumbbell': return <Dumbbell {...iconProps} />;
      case 'building': return <Building {...iconProps} />;
      case 'paw-print': return <PawPrint {...iconProps} />;
      default: return <Baby {...iconProps} />;
    }
  };

  return (
    <div className="container-fluid py-4  text-white rounded-lg">
      {/* Property Title */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center">
          <MapPin className="text-[#BD9167] mr-2" size={30} />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{property.title}</h1>
        </div>
        <div className="d-flex align-items-center bg-[#171717] backdrop-blur-lg px-6 py-2 rounded-2xl">
          <Home className="text-[#BD9167] mr-2" size={20} />
          <span className="text-lg md:text-xl">{property.propertyType}</span>
        </div>
      </div>

      {/* Property Description */}
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">
        {property.description}
      </p>

      {/* Price Section */}
      <div className="mb-5">
        <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Price</p>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">${property.price.toLocaleString()}</h2>
          <div className="d-flex gap-4">
            <button className="text-[#A9A9A9]">
              <Share size={20} />
            </button>
            <button className="text-[#A9A9A9]">
              <Bookmark size={20} />
            </button>
            <button className="text-[#A9A9A9]">
              <Sliders size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Property Details Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 mb-5">
        <div className="col">
          <div className=" h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Installment</p>
            <p className="text-xl md:text-2xl">for {property.installmentYears} Years</p>
          </div>
        </div>
        <div className="col">
          <div className="h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Initial Payment</p>
            <p className="text-xl md:text-2xl">${property.initialPayment.toLocaleString()}</p>
          </div>
        </div>
        <div className="col">
          <div className=" h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Bed Rooms</p>
            <p className="text-xl md:text-2xl">{property.bedrooms} Bed Rooms</p>
          </div>
        </div>
        <div className="col">
          <div className=" h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Space Dimensions</p>
            <p className="text-xl md:text-2xl">{property.area.value.toLocaleString()} {property.area.unit}</p>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="py-3">
            <ConsultationButton
              show={true}
              link="/consultation"
              iconSrc="/icons/consultation-icon.png"
            />
          </div>
        </div>
      </div>

      {/* Features & Amenities */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {property.amenities.map((amenity) => (
            <div className="col" key={amenity.id}>
              <div className="d-flex align-items-center p-3 rounded border-1 border-[#BD9167] h-100">
                {renderIcon(amenity.icon)}
                <span className="ms-2 text-base md:text-lg">{amenity.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample JSON data
export const propertyData: PropertyDetails = {
  title: "Burj Khalifa Residences",
  propertyType: "Villa",
  description: "A modern property provides a range of amenities ensuring a comfortable living. The project's location offers a well-developed infrastructure. Residents can find security, children's play area, children's pool, shared gym, central air conditioning, built-in wardrobe, covered parking, balcony and entertainment options in proximity.",
  price: 300000.00,
  installmentYears: 10,
  initialPayment: 30000,
  bedrooms: 2,
  area: {
    value: 1436,
    unit: "sq.ft"
  },
  amenities: [
    { id: "a1", name: "Children's play area", icon: "child" },
    { id: "a2", name: "Children's pool", icon: "waves" },
    { id: "a3", name: "Built-in wardrobe", icon: "shopping-bag" },
    { id: "a4", name: "Central air conditioning", icon: "air-vent" },
    { id: "a5", name: "Security", icon: "shield" },
    { id: "a6", name: "Covered parking", icon: "car" },
    { id: "a7", name: "Shared gym", icon: "dumbbell" },
    { id: "a8", name: "Balcony", icon: "building" },
    { id: "a9", name: "Pets allowed", icon: "paw-print" }
  ]
};

// Example usage in a page component
export default function PropertyInfo() {
  return (
    <div className="container mx-auto py-8">
      <PropertyDetailsCard property={propertyData} />
    </div>
  );
}