'use client'

import { blogListData } from "@/data/blogs";
import { Blog as BlogType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BlogHeader from "./BlogHeader";

const componentMap = {
    DummyBlog: dynamic(() => import("@/data/Blogs/DummyBlog")),
    Blog1: dynamic(() => import("@/data/Blogs/Blog1")),
    Blog2: dynamic(() => import("@/data/Blogs/Blog2")),
    Blog3: dynamic(() => import("@/data/Blogs/Blog3")),
    // Add more if needed
};

const Blog = () => {
    const { blogName } = useParams();

    const blogData = blogListData.find((blog: BlogType) =>
        blogName === formatToHyphenated(blog.title)
    );

    if (!blogData) return <>BLOG NOT FOUND</>;

    const BlogComponent = componentMap[blogData.component as keyof typeof componentMap];

    if (!BlogComponent) return <>BLOG NOT FOUND</>;

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

    return (
        <section className='p-[10px] md:p-3 lg:p-5 font-poppins mt-[100px] space-y-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <BlogHeader blog={blogData} />
            {/* <Suspense fallback={<p>Loading blog...</p>}>
                <BlogComponent />
            </Suspense> */}
        </section>
    );
};

export default Blog;
