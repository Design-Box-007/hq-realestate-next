// BlogDetail.tsx
import React from "react";
import { Blog, IBlog } from "@/types";
import Image from "next/image";
import { Share2 } from "lucide-react";
import formatDate from "@/utils/formatDateString";

// BlogHeader component with title and image
type BlogHeaderProps = Pick<IBlog, "cover_image" | "blog_title" | "blog_authorName" | "created_date" | "blog_description">;

const BlogHeader: React.FC<{ blog: BlogHeaderProps }> = ({ blog }) => {
    return (
        <header className="min-h-screen  text-white">
            <div className="flex flex-col gap-0   relative">
                {/* Author and date section */}
                <div className="flex items-center justify-between">
                    <div className="text-base text-white">{blog.blog_authorName + " " + formatDate(blog.created_date)}</div>
                    <button className="p-2 rounded-full hover:bg-gray-100 mt-4">
                        <Share2 size={18} />
                    </button>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">{blog.blog_title}</h1>

                {/* Featured Image */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image
                        src={blog.cover_image}
                        width={1386}
                        height={500}
                        className="object-cover rounded-lg w-full h-full object-center"
                        alt={blog.blog_title}
                        priority
                    />
                </div>
            </div>
            <div className=" max-w-none py-8 text-xl text-gray-300 border-b">
                {blog.blog_description}
            </div>
        </header>
    );
};


export default BlogHeader;
