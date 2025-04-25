'use client'

import { blogListData } from "@/data/blogs";
import { Blog as BlogType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import Navbar from "../Common/Navbar";
import FeaturedInvestmentAreas, { investmentAreasData } from "./FeaturedInvestmentAreas";


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
const BlogDetailPage = dynamic(() => import("./BlogHeader"), {
  loading: () => <p>Loading blog...</p>
});

const Blog = () => {
  const { blogName } = useParams();

  const [showMenu, setShowMenu] = useState(false);


  // Find the specific blog data based on the slug
  const blogData = blogListData.find((blog: BlogType) =>
    blogName === formatToHyphenated(blog.title)
  );

  if (!blogData) return <>BLOG NOT FOUND</>;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogData.title,
    "description": blogData.description,
    "image": blogData.imgSrc || "https://spacesculpt.ae/default-blog-image.jpg",
    "url": `https://spacesculpt.ae/blogs/${formatToHyphenated(blogData.title)}`,
    "author": {
      "@type": "Person",
      "name": "Space Sculpt"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Space Sculpt",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spacesculpt.ae/logo.png"
      }
    },
    "datePublished": blogData.date,
    "dateModified": blogData.updatedDate || blogData.date
  };


  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const teamData: TeamData[] = [
  //   {
  //     name: "Pintér Beatrix",
  //     image: "/team/team-member-1.jpg",
  //     position: "Real Estate Advisor",
  //     experience: 7,
  //     role: "Co-Admin",
  //     contactOptions: {
  //       phone: true,
  //       mail: true,
  //       whatsapp: true
  //     }
  //   },
  //   {
  //     name: "Balla Daniella",
  //     image: "/team/team-member-2.jpg",
  //     position: "Senior Agent",
  //     experience: 5,
  //     role: "Sales Manager",
  //     contactOptions: {
  //       phone: false,
  //       mail: true,
  //       whatsapp: false
  //     }
  //   },
  //   {
  //     name: "Kelemen Krisztina",
  //     image: "/team/team-member-3.jpg",
  //     position: "Property Consultant",
  //     experience: 3,
  //     role: "Investments",
  //     contactOptions: {
  //       phone: true,
  //       mail: false,
  //       whatsapp: true
  //     }
  //   }
  // ];


  return (
    <div className="container-fluid ">
      <div className="position-relative">
        <div className="position-relative w-100 px-4" style={{ zIndex: 9999 }}>

          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Dynamically render the BlogDetailPage component */}
        <Suspense fallback={<p>Loading blog content...</p>}>
          <BlogDetailPage blog={blogData} />
        </Suspense>
        <FeaturedInvestmentAreas title={"Featured Areas for High ROI Investments"} areas={investmentAreasData.areas} />
      </div>
    </div>
  );
};

export default Blog;
