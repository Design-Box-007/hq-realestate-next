import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";
import { propertyList } from '@/data/propertyData';

// Property Card Props Interface
interface PropertyCardProps {
  mainImage: { url: string; alt: string };
  title: string;
  propertyType: string;
  price: number;
  installmentYears: number;
  initialPayment: string;
  completionDate: string;
  icons: string;
  contactLinks: {
    phone?: string;
    email?: string;
    whatsapp?: string;
    linkedin?: string;
  };
}

// Property Card Component
const PropertyCard: React.FC<PropertyCardProps> = ({
  mainImage,
  title,
  propertyType,
  price,
  installmentYears,
  initialPayment,
  completionDate,
  icons,
  contactLinks,
}) => {
  return (
    <Link
      href={`/properties/${formatToHyphenated(title)}`} 
      className="block w-full mt-4 text-decoration-none"
    >
      <div className="rounded-xl overflow-hidden shadow-lg bg-[#222222] text-white border-1 border-[#333333]">
        {/* Property Image */}
        <div className="relative h-96">
          <Image
            src={mainImage.url || "/api/placeholder/400/320"}
            alt={mainImage.alt}
            className="object-cover rounded-xl"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Badges - Now positioned below the image */}
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-4">
            {/* Location Badge */}
            <div className="flex items-center space-x-2">
              <MapPin size={36} className="text-[#EDBE8C]" />
              <span className="text-4xl font-medium">{title}</span>
            </div>

            {/* Type Badge */}
            <div className="bg-gray-800 px-2 py-1 rounded-md">
              {icons}
              <span className="text-xs text-gray-300">{propertyType}</span>
            </div>
          </div>

          {/* Property Details - Aligned in a grid */}
          <div className="grid grid-cols-4 gap-1 text-xs mb-4">
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Price</p>
              <p className="font-bold text-white text-base">from {price}</p>
            </div>
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Installment</p>
              <p className="font-bold text-white text-base">for {installmentYears} Years</p>
            </div>
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Initial Payment</p>
              <p className="font-bold text-white text-base">{initialPayment}</p>
            </div>
            {/* Completion Date */}
            <div>
              <p className="text-[#A9A9A9] text-[12px]">Completion Date</p>
              <p className="font-bold text-white text-base">{completionDate}</p>
            </div>
          </div>

          {/* Contact links - Shown when hovered */}
          <div className="w-full transition-all duration-300 flex gap-3">
            {contactLinks.phone && (
              <a
                href={`tel:${contactLinks.phone}`}
                className="flex-1 flex items-center justify-between rounded-full bg-[#171717] py-2 px-3 text-white hover:border-[#EDBE8C] transition-all text-decoration-none"
              >
                <div className="rounded-full bg-[#EDBE8C] p-1.5 flex items-center justify-center">
                  <FaPhone className="text-black text-[12px]" />
                </div>
                <span className="mx-2 text-[12px]">Phone</span>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-amber-500 text-[12px]" />
                </div>
              </a>
            )}
            {contactLinks.email && (
              <a
                href={`mailto:${contactLinks.email}`}
                className="flex-1 flex items-center justify-between rounded-full bg-[#171717] py-2 px-3 text-white hover:border-[#EDBE8C] transition-all text-decoration-none"
              >
                <div className="rounded-full bg-[#EDBE8C] p-1.5 flex items-center justify-center">
                  <FaEnvelope className="text-black text-[12px]" />
                </div>
                <span className="mx-2 text-[12px]">Email</span>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-amber-500 text-[12px]" />
                </div>
              </a>
            )}
            {contactLinks.whatsapp && (
              <a
                href={`https://wa.me/${contactLinks.whatsapp}`}
                className="flex-1 flex items-center justify-between rounded-full bg-[#171717] py-2 px-3 text-white hover:border-[#EDBE8C] transition-all text-decoration-none"
              >
                <div className="rounded-full bg-[#EDBE8C] p-1.5 flex items-center justify-center">
                  <FaWhatsapp className="text-black text-[12px]" />
                </div>
                <span className="mx-2 text-[12px]">WhatsApp</span>
                <div className="rounded-full border border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                  <FaArrowRight className="text-amber-500 text-[12px]" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
