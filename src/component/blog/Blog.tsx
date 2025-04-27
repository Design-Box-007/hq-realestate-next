'use client'

import { IBlog } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import { useParams } from "next/navigation";

import FeaturedInvestmentAreas from "./FeaturedInvestmentAreas";
import Navbar from "../Common/NavbarMenu";
import BlogHeader from "./BlogHeader";
import { useGetBlogs } from "@/hooks/useGetBlogs";
import RecentBlogsSection from "../blogs/RecentBlogsSection";
import blogListDataV2 from "@/data/blog-v2";
import CTA from "../Common/Cta";
import { images } from "@/data/assets";


// interface TeamData {
//   name: string
//   image: string
//   position: string
//   experience: number
//   role: string
//   contactOptions: {
//     phone: boolean
//     mail: boolean
//     whatsapp: boolean
//   }
// }

// Dynamically import the BlogDetailPage component
// const BlogDetailPage = dynamic(() => import("./BlogHeader"), {
//   loading: () => <p>Loading blog...</p>
// });

const Blog = () => {
  const { blogName } = useParams();


  const { blogs, loading, error } = useGetBlogs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  // Find the specific blog data based on the slug
  const blogData = blogs.find((blog: IBlog) =>
    blogName === formatToHyphenated(blog.blog_title)
  );

  if (!blogData) return <>BLOG NOT FOUND</>;
  if (!blogData.investmentData) return <>Blog Not Found</>



  return (
    <div className="container-fluid ">
      <div className="position-relative">
        <Navbar />
        <div className="my-2">
        <BlogHeader blog={blogData} />
        </div>
        <FeaturedInvestmentAreas title={blogData.blog_subtitle} areas={blogData.investmentData} marketInsights={blogData.market_insights} />
        <div className="my-5">
          <RecentBlogsSection
            blogs={blogListDataV2}
            title="Explore Our Blogs"
            viewAllLink="/blog"
            limit={3} // Shows only the first 3 blogs (indexes 0-2)
          />
        </div>
        <div className="my-5">
          <CTA
            backgroundImage={images.CTAbg}
            headline="Helping you find your dream property in Dubai's"
            ctaText="Start Your Journey"
            ctaLink="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
