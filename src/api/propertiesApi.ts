// api/propertiesApi.ts

import { IProperty } from "@/types"; // Update with the correct path to your types file

// Define the Property API response format from WordPress
export interface Property {
    id: number;
    title: { rendered: string };
    acf: {
        property_name: string;
        property_location: string;
        property_cover_image: string;
        property_thumbnails: { thumbnail_image: string }[];
        property_category_type: string;
        property_description: string;
        property_price: string;
        initial_payment: string;
        square_ft:number;
        completion_date: string;
        property_units: string;
        installment_years: string;
        ameneties: { amenity: string }[];
        gallery: { thumbnail_image: string }[];
        phone_number: string;
        whatsapp_number: string;
        email: string;
    };
}

// Fetch all properties and return only the ACF fields formatted
export async function getProperties(): Promise<IProperty[]> {
    const res = await fetch(`https://uzq.bth.mybluehostin.me/wp-json/wp/v2/hq-property?status=publish&_=${Date.now()}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch properties');
    }
    const data: Property[] = await res.json();
    const formattedData = await propertyFormatter(data);
    return formattedData;
}

// Helper to format the property data
const propertyFormatter = async (data: Property[]): Promise<IProperty[]> => {
    return Promise.all(
        data.map(async (d) => {
            const acf = d.acf;

            const formattedProperty: IProperty = {
                title: acf.property_name,
                propertyLocation: acf.property_location,
                image: acf.property_cover_image,
                thumbnails: acf.property_thumbnails.map((thumb) => thumb.thumbnail_image),
                ameneties: acf.ameneties.map((amenity) => amenity.amenity.trim()), // Clean extra spaces
                images: acf.gallery.map((image) => image.thumbnail_image),
                propertyType: "Apartment", // Assuming property type is always "Apartment", modify as needed
                propertyCategoryType: acf.property_category_type.toLowerCase() as "commercial" | "residential",
                description: acf.property_description,
                price: parseFloat(acf.property_price), // Convert to number if it's a string
                installmentYears: parseInt(acf.installment_years, 10),
                completionDate: acf.completion_date,
                initialPayment: parseFloat(acf.initial_payment),
                units: parseInt(acf.property_units, 10),
                area: {
                    value: acf.square_ft, // Assuming area information is not provided in ACF. Modify if available
                    unit: 'sqft', // Placeholder for unit, modify if needed
                },
                contactLinks: {
                    phone: acf.phone_number,
                    email: acf.email,
                    whatsapp: acf.whatsapp_number,
                },
            };

            return formattedProperty;
        })
    );
};
