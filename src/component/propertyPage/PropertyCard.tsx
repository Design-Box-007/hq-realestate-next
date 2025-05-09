import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp, FaHome, FaBuilding } from 'react-icons/fa';
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";
import { IProperty } from '@/types';
import { motion } from 'framer-motion';
import TopToBottomReveal from '../Home/TopToBottomReveal';
import { formatNumber } from '@/utils/formatCurrency';

export const getPropertyIcon = (type: string | undefined) => {
  if (!type) return null;

  const typeLower = type.toLowerCase();

  if (typeLower.includes("residential")) {
    return <FaHome className="text-[#EDBE8C] text-lg sm:text-base" />;
  } else if (typeLower.includes("commercial")) {
    return <FaBuilding className="text-[#EDBE8C] text-base sm:text-sm" />;
  } else {
    return null;
  }
};

const PropertyCard: React.FC<{ property: IProperty }> = ({ property }) => {
  return (
    <TopToBottomReveal>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 4 }}
        className="rounded-xl overflow-hidden shadow-lg bg-[#222222] text-white border-1 border-[#333333] mt-4"
      >
        {/* Property Image */}

        <Link
          href={`/properties/${formatToHyphenated(property.title)}`}
          passHref
        >
          <div className="relative h-72 sm:h-96">
            <Image
              src={property.image}
              alt={property.title}
              className="object-cover rounded-xl"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="px-4 py-3 sm:px-3 sm:py-2">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
            {/* Location Badge */}
            <div className="flex items-center space-x-2">
              <MapPin size={30} className="text-[#EDBE8C]" />
              <Link
                href={`/properties/${formatToHyphenated(property.title)}`}
                className="text-2xl lg:text-3xl font-medium hover:text-[#EDBE8C] text-decoration-none !text-white transition-colors"
              >
                {property.title}
              </Link>
            </div>

            {/* Type Badge */}
            <div className="bg-gray-800 px-2 py-1 rounded-md flex items-center gap-2">
              {getPropertyIcon(property.propertyCategoryType)}
              <span className="text-xs text-gray-300">{property.propertyType}</span>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs mb-4">
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Price</p>
              <p className="font-bold text-white text-base">from ${formatNumber(property.price)}</p>
            </div>
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Installment</p>
              <p className="font-bold text-white text-base">for {property.installmentYears} Years</p>
            </div>
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Initial Payment</p>
              <p className="font-bold text-white text-base">${property.initialPayment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Completion Date</p>
              <p className="font-bold text-white text-base">{property.completionDate}</p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="w-full transition-all duration-300 flex gap-3 flex-col sm:flex-row">
            {property.contactLinks?.phone && (
              <a
                href={`tel:${property.contactLinks.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between text-decoration-none rounded-full bg-[#171717] py-2 px-3 text-white hover:border-[#EDBE8C] border transition-all"
              >
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#EDBE8C] p-1.5 sm:p-1 flex items-center justify-center">
                    <FaPhone className="text-black text-[12px] transform rotate-[155deg]" />
                  </div>
                  <span className="mx-2 text-[12px]">Phone</span>
                </div>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-[#EDBE8C] text-[12px]" />
                </div>
              </a>
            )}

            {property.contactLinks?.email && (
              <a
                href={`mailto:${property.contactLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between rounded-full bg-[#171717] py-2 px-3 text-decoration-none text-white hover:border-[#EDBE8C] border transition-all"
              >
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-[#EDBE8C] text-[18px] sm:text-[16px]" />
                  </div>
                  <span className="mx-2 text-[12px]">Email</span>
                </div>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-[#EDBE8C] text-[12px]" />
                </div>
              </a>
            )}

            {property.contactLinks?.whatsapp && (
              <a
                href={`https://wa.me/${property.contactLinks.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between rounded-full text-decoration-none bg-[#171717] py-2 px-3 text-white hover:border-[#EDBE8C] border transition-all"
              >
                <div className="flex flex-row gap-1 items-center">
                  <div className="rounded-full bg-[#EDBE8C] p-0.5 flex items-center justify-center">
                    <FaWhatsapp className="text-black text-[16px] sm:text-[14px]" />
                  </div>
                  <span className="mx-2 text-[12px]">WhatsApp</span>
                </div>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-[#EDBE8C] text-[12px]" />
                </div>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TopToBottomReveal>
  );
};

export default PropertyCard;
