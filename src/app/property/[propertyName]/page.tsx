
import Blog from "@/component/blog/Blog";
import { properties } from "@/data/property";
import formatToHyphenated from "@/utils/formatPathName";

// Now awaiting params and extracting propertyName
export const generateMetadata = async ({ params }: { params: Promise<{ propertyName: string }> }) => {
    // Awaiting the params to resolve the Promise
    const { propertyName } = await params;

    const propertyData = properties.find(property =>
        propertyName === formatToHyphenated(property.title)
    );

    if (!propertyData) {
        return {
            title: "Property Not Found",
            description: "We couldn't find the blog you're looking for.",
            metadataBase: new URL(""),  // Set metadataBase for external URLs
        };
    }

    return {
        title: `${propertyData.title} | Space Sculpt Blog`,
        description: propertyData.description,
        alternates: {
            canonical: `https://spacesculpt.ae/properties/${propertyName}`,
        },
        openGraph: {
            title: propertyData.title,
            description: propertyData.description,
            url: `https://spacesculpt.ae/properties/${propertyName}`,
            images: [
                {
                    url: propertyData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg',
                    alt: propertyData.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: propertyData.title,
            description: propertyData.description,
            images: [propertyData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg'],
        },
        robots: {
            index: true,
            follow: true,
        },
        metadataBase: new URL("https://spacesculpt.ae"),  // Set metadataBase for external URLs
    };
};

const Page = () => {
    return <Blog />;
};

export default Page;
