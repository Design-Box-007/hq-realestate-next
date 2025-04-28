import { IProperty } from "@/types";
import { images } from "./assets";

const propertiesDataV2: IProperty[] = [
    {
        title: "Downtown Business Center",
        propertyLocation: "5th Avenue, New York, NY",
        image: images.property11,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Parking", "High-Speed Internet", "Security"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Office Space",
        propertyCategoryType: "commercial",
        description: "Premium office spaces available in the heart of the city with modern amenities and flexible layouts.",
        price: 2500000,
        installmentYears: 5,
        initialPayment: 500000,
        completionDate: "2025-12-31",
        units: 10,
        area: {
            value: 1500,
            unit: "sqft",
        },
        contactLinks: {
            phone: "+1 555-1234",
            email: "contact@businesscenter.com",
            whatsapp: "+15551234",
        },
    },
    {
        title: "Lakeview Luxury Apartments",
        propertyLocation: "Greenwood Lakes, Austin, TX",
        image: images.property12,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Swimming Pool", "Gym", "Children's Park"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Apartment",
        propertyCategoryType: "residential",
        description: "Experience lakeside living with world-class amenities in these beautifully designed apartments.",
        price: "450000",
        installmentYears: 3,
        initialPayment: "100000",
        completionDate: "2026-06-30",
        units: 50,
        area: {
            value: 1200,
            unit: "sqft",
        },
        contactLinks: {
            phone: "+1 555-6789",
            email: "sales@lakeviewapartments.com",
        },
    },
    {
        title: "Industrial Warehouses",
        propertyLocation: "Logistics Park, Dallas, TX",
        image: images.property13,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["24/7 Surveillance", "Loading Docks", "Truck Parking"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Warehouse",
        propertyCategoryType: "commercial",
        description: "State-of-the-art warehouses ideal for logistics and manufacturing industries with maximum security.",
        price: 1800000,
        installmentYears: 4,
        initialPayment: 400000,
        completionDate: "2025-09-15",
        units: 5,
        area: {
            value: 5000,
            unit: "sqft",
        },
        contactLinks: {
            phone: "+1 555-2468",
            email: "leasing@industrialparks.com",
            whatsapp: "+15552468",
        },
    },

    {
        title: "Sunset Villas",
        propertyLocation: "Palm Beach, Florida",
        image: images.property14,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Private Pool", "Garden", "Garage"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Villa",
        propertyCategoryType: "residential",
        description: "Elegant private villas offering seaside luxury with stunning sunset views.",
        price: 1200000,
        installmentYears: 6,
        initialPayment: 300000,
        completionDate: "2027-05-01",
        units: 8,
        area: {
            value: 3200,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-7890",
            email: "info@sunsetvillas.com",
            whatsapp: "+15557890"
        }
    },
    {
        title: "TechPark Co-Working Spaces",
        propertyLocation: "Silicon Valley, CA",
        image: images.property11,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Meeting Rooms", "Cafeteria", "Wi-Fi"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Co-Working Space",
        propertyCategoryType: "commercial",
        description: "Innovative co-working spaces designed for startups, freelancers, and tech companies.",
        price: "750000",
        installmentYears: 2,
        initialPayment: "150000",
        completionDate: "2025-08-20",
        units: 20,
        area: {
            value: 800,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-3210",
            email: "connect@techparkspaces.com"
        }
    },
    {
        title: "Green Meadows Apartments",
        propertyLocation: "Suburban Heights, Denver, CO",
        image: images.property12,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Clubhouse", "Jogging Track", "Kids Play Area"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Apartment",
        propertyCategoryType: "residential",
        description: "Affordable and eco-friendly apartments surrounded by lush greenery and fresh air.",
        price: 300000,
        installmentYears: 4,
        initialPayment: 50000,
        completionDate: "2026-03-10",
        units: 100,
        area: {
            value: 950,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-9876",
            email: "sales@greenmeadows.com",
            whatsapp: "+15559876"
        }
    },

    {
        title: "Skyline Penthouse",
        propertyLocation: "Downtown Los Angeles, CA",
        image: images.property12,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Infinity Pool", "Rooftop Lounge", "Private Elevator"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Penthouse",
        propertyCategoryType: "residential",
        description: "Luxury penthouse offering breathtaking city views and top-tier amenities.",
        price: 3500000,
        installmentYears: 5,
        initialPayment: 700000,
        completionDate: "2026-11-01",
        units: 2,
        area: {
            value: 4200,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-1122",
            email: "luxury@skylinepenthouses.com",
            whatsapp: "+15551122"
        }
    },
    {
        title: "Metro Mall Retail Shops",
        propertyLocation: "Central District, Chicago, IL",
        image: images.property13,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Food Court", "Security Surveillance", "Valet Parking"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Retail Space",
        propertyCategoryType: "commercial",
        description: "High-footfall retail spaces inside the Metro Mall, perfect for shops and showrooms.",
        price: "980000",
        installmentYears: 3,
        initialPayment: "250000",
        completionDate: "2025-04-15",
        units: 30,
        area: {
            value: 600,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-3344",
            email: "leasing@metromallspaces.com"
        }
    },
    {
        title: "Countryside Cottages",
        propertyLocation: "Blue Ridge Mountains, NC",
        image: images.property14,
        thumbnails: [
            images.PropertyImage1,
            images.PropertyImage2,
            images.PropertyImage3
        ],
        ameneties: ["Fireplace", "Backyard Garden", "Private Parking"],
        images: [
            images.Blog1,
            images.Blog2,
            images.Blog3,
            images.BlogHero,
        ],
        propertyType: "Cottage",
        propertyCategoryType: "residential",
        description: "Charming countryside cottages offering peace, nature, and cozy living away from the city.",
        price: 400000,
        installmentYears: 2,
        initialPayment: 80000,
        completionDate: "2025-10-05",
        units: 12,
        area: {
            value: 1400,
            unit: "sqft"
        },
        contactLinks: {
            phone: "+1 555-5566",
            email: "info@countrysidecottages.com",
            whatsapp: "+15555566"
        }
    }
]

export default propertiesDataV2;

