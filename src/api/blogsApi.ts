import { IBlog, IInvestmentData } from "@/types";

// Define the Blog data interface (adjusted for your API)
export interface Blog {
    id: number;
    title: { rendered: string };
    date: string;
    modified: string;
    acf: {
        blog_description: string;
        blog_cover_image: string;
        blog_author_name: string;
        market_insights:string;
        blog_tags: { blog_tag: string }[];
        investment_data: {
            investment_title: string;
            investment_cover_image: string;
            average_roi: string;
            best_investment_type: string;
            features: { feature: string }[];
        }[];
    };
}

// Fetch all blogs and return only the ACF fields formatted
export async function getBlogs(): Promise<IBlog[]> {
    const res = await fetch(`https://uzq.bth.mybluehostin.me/wp-json/wp/v2/hq-blog?status=publish&_=${Date.now()}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }
    const data: Blog[] = await res.json();
    const formattedData = await blogFormatter(data);
    return formattedData;
}

// Helper to format the blog data
const blogFormatter = async (data: Blog[]): Promise<IBlog[]> => {
    return Promise.all(
        data.map(async (d) => {
            const acf = d.acf;

            const formattedBlog: IBlog = {
                blog_title: d.title.rendered,
                blog_description: acf.blog_description,
                cover_image: acf.blog_cover_image,
                blog_authorName: acf.blog_author_name,
                created_date: d.date, // The 'date' field from WordPress is used as the created date
                updatedDate: d.modified, // The 'modified' field from WordPress is used as the updated date
                readTime: calculateReadTime(acf.blog_description), // Assuming you want a simple read time calculation
                market_insights:acf.market_insights,
                tags: acf.blog_tags.map(tag => tag.blog_tag),
                investmentData: acf.investment_data.map((investment): IInvestmentData => ({
                    investment_title: investment.investment_title,
                    investment_cover_image: investment.investment_cover_image,
                    average_roi: investment.average_roi,
                    best_investment_type: investment.best_investment_type,
                    features: investment.features.map(f => f.feature),
                })),
            };

            return formattedBlog;
        })
    );
};

// Helper function to calculate read time (estimated based on word count)
const calculateReadTime = (text: string): number => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute); // round up
    return readTime;
};
