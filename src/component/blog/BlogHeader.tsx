import React from "react";
import { Blog } from '@/types'
import Image from "next/image";

type BlogHeaderProps = Pick<Blog, "imgSrc" | "title">; // Only includes imgSrc and title

const BlogHeader: React.FC<{ blog: BlogHeaderProps }> = ({ blog }) => {
    return (
        <div className="flex flex-col gap-10 p-4 border-b mt-[100px]">
            <h1 className="text-4xl font-medium">{blog.title}</h1>
            <Image src={blog.imgSrc} width={1360} height={683} alt={blog.title} className="rounded-lg"/>
        </div>
    );
};

export default BlogHeader;
