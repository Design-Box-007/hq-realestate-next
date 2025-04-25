'use client'

import { blogListData } from "@/data/blogs";
import { Blog as BlogType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../Common/Navbar";
import FeaturedInvestmentAreas from "./FeaturedInvestmentAreas";
import BlogHeader from "./BlogHeader";


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


  // Find the specific blog data based on the slug
  const blogData = blogListData.find((blog: BlogType) =>
    blogName === formatToHyphenated(blog.title)
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

        <FeaturedInvestmentAreas title={"Featured Areas for High ROI Investments"} areas={blogData.investmentData} />
      </div>
    </div>
  );
};

export default Blog;
