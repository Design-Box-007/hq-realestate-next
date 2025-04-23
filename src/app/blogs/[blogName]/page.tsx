
import Blog from "@/component/blog/Blog";
import { blogListData } from "@/data/blogs";
import formatToHyphenated from "@/utils/formatPathName";

// Now awaiting params and extracting blogName
export const generateMetadata = async ({ params }: { params: Promise<{ blogName: string }> }) => {
    // Awaiting the params to resolve the Promise
    const { blogName } = await params;

    const blogData = blogListData.find(blog =>
        blogName === formatToHyphenated(blog.title)
    );

    if (!blogData) {
        return {
            title: "Blog Not Found | Space Sculpt Blog",
            description: "We couldn't find the blog you're looking for.",
            metadataBase: new URL("https://spacesculpt.ae"),  // Set metadataBase for external URLs
        };
    }

    return {
        title: `${blogData.title} | Space Sculpt Blog`,
        description: blogData.description,
        alternates: {
            canonical: `https://spacesculpt.ae/blogs/${blogName}`,
        },
        openGraph: {
            title: blogData.title,
            description: blogData.description,
            url: `https://spacesculpt.ae/blogs/${blogName}`,
            images: [
                {
                    url: blogData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg',
                    alt: blogData.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: blogData.title,
            description: blogData.description,
            images: [blogData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg'],
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
