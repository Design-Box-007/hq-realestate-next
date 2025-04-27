'use client'

import React from "react";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const BlogCardGrid: React.FC<{ blogs: IBlog[] }> = ({ blogs }) => {
    return (
        <motion.section
            className="grid p-[14px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-poppins"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {blogs.map((blog: IBlog, index: number) => (
                <BlogCard blog={blog} key={index} />
            ))}
        </motion.section>
    );
};

export default BlogCardGrid;
