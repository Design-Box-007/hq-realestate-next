// data/propertyData.ts

export const propertyList = [
  {
    id: "burj-khalifa-residences",
    mainImage: {
      id: "main-1",
      url: "/property/property.jpg",
      alt: "Burj Khalifa skyline"
    },
    thumbnails: [
      { id: "thumb-1", url: "/property/property.jpg", alt: "Skyline view" },
      { id: "thumb-2", url: "/property/property.jpg", alt: "Living room" },
      { id: "thumb-3", url: "/property/property.jpg", alt: "Bedroom" },
      { id: "thumb-4", url: "/property/property.jpg", alt: "Bathroom" }
    ],
    propertyName: "Burj Khalifa Residences",
    propertyLocation: "Downtown Dubai, UAE",
    title: "Burj Khalifa Residences",
    propertyType: "Penthouse",
    description: "Iconic views and unmatched luxury in the tallest tower.",
    price: 900000,
    installmentYears: 10,
    initialPayment: 90000,
    bedrooms: 4,
    area: { value: 3200, unit: "sq ft" },
    contactLinks: {
      phone: "+971 50 1234567",
      email: "info@burjkhalifa.com",
      whatsapp: "+971 50 1234567"
    }
  },
    {
      id: "dubai-marina-heights",
      mainImage: {
        id: "main-2",
        url: "/property/property2.jpg",
        alt: "Dubai Marina view"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property2.jpg", alt: "Marina view" },
        { id: "thumb-2", url: "/property/property1.jpg", alt: "Living area" },
        { id: "thumb-3", url: "/property/property3.jpg", alt: "Kitchen" },
        { id: "thumb-4", url: "/property/property4.jpg", alt: "Balcony" }
      ],
      propertyName: "Dubai Marina Heights",
      propertyLocation: "Dubai Marina, UAE",
      title: "Dubai Marina Heights",
      propertyType: "Apartment",
      description: "Modern apartments with waterfront views and easy beach access.",
      price: 600000,
      installmentYears: 7,
      initialPayment: 50000,
      bedrooms: 3,
      area: { value: 1850, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Private Beach Access", icon: "waves" },
        { id: "a2", name: "Covered Parking", icon: "car" },
        { id: "a3", name: "Children’s Area", icon: "child" },
        { id: "a4", name: "Shared Gym", icon: "dumbbell" },
        { id: "a5", name: "Pets Allowed", icon: "paw-print" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "jlt-sky-villas",
      mainImage: {
        id: "main-3",
        url: "/property/property3.jpg",
        alt: "JLT skyline"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property3.jpg", alt: "Front view" },
        { id: "thumb-2", url: "/property/property2.jpg", alt: "Lobby" },
        { id: "thumb-3", url: "/property/property1.jpg", alt: "Rooftop" },
        { id: "thumb-4", url: "/property/property4.jpg", alt: "Garden" }
      ],
      propertyName: "JLT Sky Villas",
      propertyLocation: "Jumeirah Lake Towers, UAE",
      title: "JLT Sky Villas",
      propertyType: "Villa",
      description: "Luxury living in the heart of JLT with skyline views.",
      price: 750000,
      installmentYears: 8,
      initialPayment: 70000,
      bedrooms: 3,
      area: { value: 2100, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Children's pool", icon: "waves" },
        { id: "a2", name: "Built-in wardrobe", icon: "shopping-bag" },
        { id: "a3", name: "Balcony", icon: "building" },
        { id: "a4", name: "Central AC", icon: "air-vent" },
        { id: "a5", name: "Security", icon: "shield" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "palm-jumeirah-resort",
      mainImage: {
        id: "main-4",
        url: "/property/property4.jpg",
        alt: "Palm resort view"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property4.jpg", alt: "Beach villa" },
        { id: "thumb-2", url: "/property/property2.jpg", alt: "Terrace" },
        { id: "thumb-3", url: "/property/property3.jpg", alt: "Sea view" },
        { id: "thumb-4", url: "/property/property1.jpg", alt: "Infinity pool" }
      ],
      propertyName: "Palm Jumeirah Resort Homes",
      propertyLocation: "Palm Jumeirah, UAE",
      title: "Palm Jumeirah Resort",
      propertyType: "Beach Villa",
      description: "Ultimate beachfront living with direct access to the ocean.",
      price: 1200000,
      installmentYears: 12,
      initialPayment: 120000,
      bedrooms: 5,
      area: { value: 4000, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Beachfront Access", icon: "waves" },
        { id: "a2", name: "Private Pool", icon: "car" },
        { id: "a3", name: "Garden", icon: "building" },
        { id: "a4", name: "Entertainment Hall", icon: "air-vent" },
        { id: "a5", name: "Security", icon: "shield" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    // Add 5 more similar variations
    {
      id: "downtown-loft-living",
      mainImage: {
        id: "main-5",
        url: "/property/property5.jpg",
        alt: "Loft apartment"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property5.jpg", alt: "Open space" },
        { id: "thumb-2", url: "/property/property1.jpg", alt: "View" },
        { id: "thumb-3", url: "/property/property2.jpg", alt: "Stairs" },
        { id: "thumb-4", url: "/property/property3.jpg", alt: "Bedroom" }
      ],
      propertyName: "Downtown Loft Living",
      propertyLocation: "Business Bay, Dubai",
      title: "Downtown Loft Living",
      propertyType: "Loft",
      description: "Stylish and modern lofts with open-plan interiors.",
      price: 450000,
      installmentYears: 6,
      initialPayment: 40000,
      bedrooms: 2,
      area: { value: 1600, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Gym", icon: "dumbbell" },
        { id: "a2", name: "Security", icon: "shield" },
        { id: "a3", name: "Parking", icon: "car" },
        { id: "a4", name: "Pets Allowed", icon: "paw-print" },
        { id: "a5", name: "Central AC", icon: "air-vent" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "creek-harbour-heights",
      mainImage: {
        id: "main-6",
        url: "/property/property6.jpg",
        alt: "Creek Harbour"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property6.jpg", alt: "Tower view" },
        { id: "thumb-2", url: "/property/property1.jpg", alt: "Living" },
        { id: "thumb-3", url: "/property/property3.jpg", alt: "Kitchen" },
        { id: "thumb-4", url: "/property/property4.jpg", alt: "Balcony" }
      ],
      propertyName: "Creek Harbour Heights",
      propertyLocation: "Dubai Creek, UAE",
      title: "Creek Harbour Heights",
      propertyType: "Apartment",
      description: "Modern high-rises with stunning waterfront views.",
      price: 550000,
      installmentYears: 9,
      initialPayment: 55000,
      bedrooms: 3,
      area: { value: 1900, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Pool", icon: "waves" },
        { id: "a2", name: "Gym", icon: "dumbbell" },
        { id: "a3", name: "Concierge", icon: "shield" },
        { id: "a4", name: "Parking", icon: "car" },
        { id: "a5", name: "Balcony", icon: "building" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "emirates-hills-estate",
      mainImage: {
        id: "main-7",
        url: "/property/property7.jpg",
        alt: "Emirates Hills"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property7.jpg", alt: "Estate view" },
        { id: "thumb-2", url: "/property/property3.jpg", alt: "Entry" },
        { id: "thumb-3", url: "/property/property1.jpg", alt: "Garden" },
        { id: "thumb-4", url: "/property/property4.jpg", alt: "Driveway" }
      ],
      propertyName: "Emirates Hills Estate",
      propertyLocation: "Emirates Hills, Dubai",
      title: "Emirates Hills Estate",
      propertyType: "Villa",
      description: "Elite lifestyle with golf course and serene greenery.",
      price: 2000000,
      installmentYears: 15,
      initialPayment: 250000,
      bedrooms: 6,
      area: { value: 6000, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Golf View", icon: "building" },
        { id: "a2", name: "Security", icon: "shield" },
        { id: "a3", name: "Pool", icon: "waves" },
        { id: "a4", name: "Garage", icon: "car" },
        { id: "a5", name: "Smart Home", icon: "air-vent" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "meadows-residency",
      mainImage: {
        id: "main-8",
        url: "/property/property8.jpg",
        alt: "The Meadows Dubai"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property8.jpg", alt: "Front" },
        { id: "thumb-2", url: "/property/property4.jpg", alt: "Living" },
        { id: "thumb-3", url: "/property/property3.jpg", alt: "Dining" },
        { id: "thumb-4", url: "/property/property1.jpg", alt: "Kitchen" }
      ],
      propertyName: "The Meadows Residency",
      propertyLocation: "The Meadows, Dubai",
      title: "The Meadows Residency",
      propertyType: "Townhouse",
      description: "Family-friendly environment with gardens and playgrounds.",
      price: 800000,
      installmentYears: 10,
      initialPayment: 75000,
      bedrooms: 4,
      area: { value: 2500, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Park Access", icon: "building" },
        { id: "a2", name: "Kids Zone", icon: "child" },
        { id: "a3", name: "Security", icon: "shield" },
        { id: "a4", name: "Parking", icon: "car" },
        { id: "a5", name: "Central AC", icon: "air-vent" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    },
    {
      id: "bluewaters-luxury-suites",
      mainImage: {
        id: "main-9",
        url: "/property/property9.jpg",
        alt: "Bluewaters Island"
      },
      thumbnails: [
        { id: "thumb-1", url: "/property/property9.jpg", alt: "Island view" },
        { id: "thumb-2", url: "/property/property3.jpg", alt: "Balcony" },
        { id: "thumb-3", url: "/property/property2.jpg", alt: "Pool" },
        { id: "thumb-4", url: "/property/property4.jpg", alt: "Sea" }
      ],
      propertyName: "Bluewaters Luxury Suites",
      propertyLocation: "Bluewaters Island, Dubai",
      title: "Bluewaters Luxury Suites",
      propertyType: "Apartment",
      description: "Exclusive suites near Ain Dubai with sea views.",
      price: 1100000,
      installmentYears: 11,
      initialPayment: 100000,
      bedrooms: 3,
      area: { value: 2300, unit: "sq.ft" },
      amenities: [
        { id: "a1", name: "Sea View", icon: "waves" },
        { id: "a2", name: "Shared Gym", icon: "dumbbell" },
        { id: "a3", name: "Concierge", icon: "shield" },
        { id: "a4", name: "Smart Lock", icon: "air-vent" },
        { id: "a5", name: "Balcony", icon: "building" }
      ],
      completionDate: '09/2025',
      icons: '',
      contactLinks: {
        phone: '+1234567890',
        email: 'pinter@example.com',
        whatsapp: '1234567890',
        linkedin: 'https://linkedin.com/in/pinter'
      }
    }
  ];
  