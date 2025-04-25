// BlogDetail.tsx
import React from "react";
import { Blog } from "@/types";
import Image from "next/image";
import { Share2 } from "lucide-react";

// BlogHeader component with title and image
type BlogHeaderProps = Pick<Blog, "imgSrc" | "title" | "authorName" | "date">;

const BlogHeader: React.FC<{ blog: BlogHeaderProps }> = ({ blog }) => {
    return (
        <div className="flex flex-col gap-0   relative">
            {/* Author and date section */}
            <div className="flex items-center justify-between">
                <div className="text-base text-white">{blog.authorName} · {blog.date}</div>
                <button className="p-2 rounded-full hover:bg-gray-100 mt-4">
                    <Share2 size={18} />
                </button>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">{blog.title}</h1>
            
            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image 
                    src={blog.imgSrc} 
                    fill
                    className="object-cover rounded-lg"
                    alt={blog.title} 
                    priority
                />
            </div>
        </div>
    );
};

// BlogContent component for the main content
type BlogContentProps = {
    content: string;
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
    return (
        <div className=" max-w-none py-8 text-xl text-gray-300 border-b">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

// Main BlogDetailPage component
interface BlogDetailPageProps {
    blog: Blog;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blog }) => {
    return (
        <div className="min-h-screen  text-white">
            <div className="">
                <BlogHeader blog={blog} />
                <BlogContent content={blog.content} />
            </div>
        </div>
    );
};

export default BlogDetailPage;
