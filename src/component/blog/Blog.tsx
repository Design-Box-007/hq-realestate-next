'use client'

import { IBlog } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import { useParams } from "next/navigation";

import FeaturedInvestmentAreas from "./FeaturedInvestmentAreas";
import Navbar from "../Common/NavbarMenu";
import BlogHeader from "./BlogHeader";
import blogListDataV2 from "@/data/blog-v2";


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

 
  // Find the specific blog data based on the slug
  const blogData = blogListDataV2.find((blog: IBlog) =>
    blogName === formatToHyphenated(blog.blog_title)
  );

  if (!blogData) return <>BLOG NOT FOUND</>;
  if (!blogData.investmentData) return <>Blog Not Found</>



  return (
    <div className="container-fluid ">
      <div className="position-relative">
        <Navbar isAbsolute={true}/>
        <BlogHeader blog={blogData} />

        <FeaturedInvestmentAreas title={"Featured Areas for High ROI Investments"} areas={blogData.investmentData} />
      </div>
    </div>
  );
};

export default Blog;
