'use client'

import { IBlog } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../Common/Navbar";
import FeaturedInvestmentAreas from "./FeaturedInvestmentAreas";
import BlogHeader from "./BlogHeader";
import { useGetBlogs } from "@/hooks/useGetBlogs";


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

  const [showMenu, setShowMenu] = useState(false);
  const { blogs, loading, error } = useGetBlogs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  // Find the specific blog data based on the slug
  const blogData = blogs.find((blog: IBlog) =>
    blogName === formatToHyphenated(blog.blog_title)
  );

  if (!blogData) return <>BLOG NOT FOUND</>;
  if (!blogData.investmentData) return <>Blog Not Found</>

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid ">
      <div className="position-relative">
        <div className="position-relative w-100 px-4" style={{ zIndex: 9999 }}>
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />
        </div>
        <BlogHeader blog={blogData} />

        <FeaturedInvestmentAreas title={"Featured Areas for High ROI Investments"} areas={blogData.investmentData} marketInsights={blogData.market_insights} />
      </div>
    </div>
  );
};

export default Blog;
