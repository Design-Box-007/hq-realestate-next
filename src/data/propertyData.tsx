// data/propertyData.ts

import { IProperty } from "@/types";
import { images } from "./assets";

export const propertyList: IProperty[] = [
  {
    "id": "burj-khalifa-residences",
    "images": images.AboutHero,
    "image": ["/property/1.jpg", "/property/2.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/1.jpg", "alt": "Skyline view" },
      { "id": "thumb-2", "url": "/property/2.jpg", "alt": "Living room" },
      { "id": "thumb-3", "url": "/property/3.jpg", "alt": "Master Bedroom" },
      { "id": "thumb-4", "url": "/property/4.jpg", "alt": "Luxury Bathroom" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Burj Khalifa Residences",
    "propertyLocation": "Downtown Dubai, UAE",
    "title": "Luxury Living in the Sky",
    "propertyType": "Penthouse",
    "description": "Iconic views and unmatched luxury in the tallest tower.",
    "price": 900000,
    "installmentYears": 10,
    "initialPayment": 90000,
    "bedrooms": 4,
    "completionDate": "09/25",
    "area": { "value": 3200, "unit": "sq ft" },
    "contactLinks": {
      "phone": "+971 50 1234567",
      "email": "info@burjkhalifa.com",
      "whatsapp": "+971 50 1234567"
    }
  },
  {
    "id": "marina-vista-tower",
    "images": images.AboutHero,
    "image": ["/property/marina1.jpg", "/property/marina2.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/marina1.jpg", "alt": "Sea view" },
      { "id": "thumb-2", "url": "/property/marina2.jpg", "alt": "Balcony view" },
      { "id": "thumb-3", "url": "/property/marina3.jpg", "alt": "Lobby area" },
      { "id": "thumb-4", "url": "/property/marina4.jpg", "alt": "Rooftop pool" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Marina Vista Tower",
    "propertyLocation": "Dubai Marina, UAE",
    "title": "Tranquil Waterfront Living",
    "propertyType": "Apartment",
    "description": "Wake up to stunning views of the marina.",
    "price": 650000,
    "installmentYears": 7,
    "initialPayment": 65000,
    "bedrooms": 2,
    "completionDate": "09/25",
    "area": { "value": 1600, "unit": "sq ft" },
    "contactLinks": {
      "phone": "+971 55 2233445",
      "email": "sales@marinavista.com",
      "whatsapp": "+971 55 2233445"
    }
  },
  {
    "id": "palm-jumeirah-villa",
    "images": images.AboutHero,
    "image": ["/property/palm1.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/palm1.jpg", "alt": "Beachfront view" },
      { "id": "thumb-2", "url": "/property/palm2.jpg", "alt": "Garden view" },
      { "id": "thumb-3", "url": "/property/palm3.jpg", "alt": "Swimming pool" },
      { "id": "thumb-4", "url": "/property/palm4.jpg", "alt": "Living room" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Palm Jumeirah Villa",
    "propertyLocation": "Palm Jumeirah, UAE",
    "title": "Beachfront Paradise",
    "propertyType": "Villa",
    "description": "Private villa with direct beach access and luxury amenities.",
    "price": 2000000,
    "installmentYears": 15,
    "initialPayment": 200000,
    "bedrooms": 5,
    "completionDate": "09/25",
    "area": { "value": 5000, "unit": "sq ft" },
    "contactLinks": {
      "phone": "+971 52 9876543",
      "email": "info@palmluxury.com",
      "whatsapp": "+971 52 9876543",
      "linkedin": "https://linkedin.com/in/palmlux"
    }
  },
  {
    "id": "downtown-loft",
    "images": images.AboutHero,
    "image": ["/property/loft1.jpg", "/property/loft2.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/loft1.jpg", "alt": "Urban interior" },
      { "id": "thumb-2", "url": "/property/loft2.jpg", "alt": "Open plan space" },
      { "id": "thumb-3", "url": "/property/loft3.jpg", "alt": "Kitchen area" },
      { "id": "thumb-4", "url": "/property/loft4.jpg", "alt": "Mezzanine bedroom" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Downtown Loft",
    "propertyLocation": "Downtown Dubai, UAE",
    "title": "Chic Urban Living",
    "propertyType": "Loft",
    "description": "A modern loft for those who love the city buzz.",
    "price": 480000,
    "installmentYears": 6,
    "initialPayment": 48000,
    "bedrooms": 1,
    "completionDate": "09/25",
    "area": { "value": 1000, "unit": "sq ft" },
    "contactLinks": {
      "email": "contact@urbanloft.com"
    }
  },
  {
    "id": "emirates-hills-mansion",
    "images": images.AboutHero,
    "image": ["/property/mansion1.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/mansion1.jpg", "alt": "Luxury mansion" },
      { "id": "thumb-2", "url": "/property/mansion2.jpg", "alt": "Outdoor patio" },
      { "id": "thumb-3", "url": "/property/mansion3.jpg", "alt": "Garden" },
      { "id": "thumb-4", "url": "/property/mansion4.jpg", "alt": "Grand staircase" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Emirates Hills Mansion",
    "propertyLocation": "Emirates Hills, Dubai",
    "title": "The Epitome of Elegance",
    "propertyType": "Mansion",
    "description": "An elite residence for luxury living at its peak.",
    "price": 7500000,
    "installmentYears": 20,
    "initialPayment": 750000,
    "bedrooms": 7,
    "completionDate": "09/25",
    "area": { "value": 10000, "unit": "sq ft" },
    "contactLinks": {
      "phone": "+971 55 7654321",
      "email": "luxury@emirateshills.com"
    }
  },
  {
    "id": "creek-harbour-apartment",
    "images": images.AboutHero,
    "image": ["/property/creek1.jpg", "/property/creek2.jpg"],
    "thumbnails": [
      { "id": "thumb-1", "url": "/property/creek1.jpg", "alt": "Creek view" },
      { "id": "thumb-2", "url": "/property/creek2.jpg", "alt": "Modern interior" },
      { "id": "thumb-3", "url": "/property/creek3.jpg", "alt": "Dining space" },
      { "id": "thumb-4", "url": "/property/creek4.jpg", "alt": "Master suite" }
    ],
    "ameneties": [
      "Children's play area",
      "Children's pool",
      "Built-in wardrobe",
      "Central air conditioning",
      "Security",
      "Covered parking",
      "Shared gym",
      "Balcony",
      "Pets allowed",
    ],
    "propertyName": "Creek Harbour Apartment",
    "propertyLocation": "Dubai Creek Harbour",
    "title": "Modern Life at the Creek",
    "propertyType": "Apartment",
    "description": "Stylish living in one of Dubai’s most vibrant new districts.",
    "price": 550000,
    "installmentYears": 8,
    "initialPayment": 55000,
    "bedrooms": 2,
    "completionDate": "09/25",
    "area": { "value": 1400, "unit": "sq ft" },
    "contactLinks": {
      "email": "sales@creekapts.com",
      "phone": "+971 58 3332211",
      "whatsapp": "+971 58 3332211"
    }
  }
];
