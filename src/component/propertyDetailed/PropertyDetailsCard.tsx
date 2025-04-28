// PropertyDetailsCard.tsx
import React from 'react';
import {
  Baby,
  Waves,
  Home,
  AirVent,
  Shield,
  Car,
  Dumbbell,
  ShoppingBag,
  PawPrint,
  Share,
  Bookmark,
  Sliders,
  MapPin
} from 'lucide-react'; import ConsultationButton from '../Common/ConsultationBtn';
import { motion } from 'framer-motion'; // 👈 Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css';
import { IProperty } from '@/types';
import { FaStar } from 'react-icons/fa';
import { images } from '@/data/assets';

// Interface
interface PropertyDetailsCardProps {
  property: IProperty;
}


const amenityIcons: Record<string, React.ReactNode> = {
  "Children's play area": <Baby size={18} className="text-[#BD9167]" />,
  "Children's pool": <Waves size={18} className="text-[#BD9167]" />,
  "Built-in wardrobe": <ShoppingBag size={18} className="text-[#BD9167]" />,
  "Central air conditioning": <AirVent size={18} className="text-[#BD9167]" />,
  "Security": <Shield size={18} className="text-[#BD9167]" />,
  "Covered parking": <Car size={18} className="text-[#BD9167]" />,
  "Shared gym": <Dumbbell size={18} className="text-[#BD9167]" />,
  "Balcony": <Home size={18} className="text-[#BD9167]" />,
  "Pets allowed": <PawPrint size={18} className="text-[#BD9167]" />
};

export function PropertyDetailsCard({ property }: PropertyDetailsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}  // 👈 Start from bottom with opacity 0
      whileInView={{ opacity: 1, y: 0 }}  // 👈 Fade in and move up
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="container-fluid  text-white rounded-lg"
    >
      {/* Rest of your code */}

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
        {/* All grid items */}
        <div className="col">
          <div className="h-100">
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
          <div className="h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Bed Rooms</p>
            <p className="text-xl md:text-2xl">{property.units} Bed Rooms</p>
          </div>
        </div>
        <div className="col">
          <div className="h-100">
            <p className="text-base md:text-lg text-[#A9A9A9] mb-1">Space Dimensions</p>
            <p className="text-xl md:text-2xl">{property.area.value.toLocaleString()} {property.area.unit}</p>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="py-3">
            <ConsultationButton
              show={true}
              link="/consultation"
              iconSrc={images.agent1}
            />
          </div>
        </div>
      </div>

      {/* Features & Amenities */}
      <div className="">
        <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {property.ameneties.map((amenity: string, index: number) => (
            <motion.div
              className="col"
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="d-flex align-items-center p-3 rounded border-1 border-[#BD9167] h-100">
                <div className="flex items-center space-x-2">
                  {amenityIcons[amenity] || <FaStar className="text-[#BD9167]" />}

                  <span className="text-base md:text-lg">{amenity}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
