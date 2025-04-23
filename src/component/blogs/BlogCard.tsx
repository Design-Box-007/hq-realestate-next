'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/types";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl bg-[var(--black-lite-color)] shadow-[0px_4px_10px_0px_#78787826]"
      variants={cardVariants}
    >
      <div className="relative w-full h-60 rounded-xl overflow-hidden mb-4">
        <Image
          src={blog.imgSrc}
          alt={blog.title}
          layout="fill"
          className="object-cover"
        />
      </div>
      
      <div className="m-2 ">
        <h3 className="fs-4 font-bold text-white">{blog.title}</h3>
        <p className="text-base text-gray-300 mt-2">{blog.description}</p>
        <Link 
          href={`/blogs/${formatToHyphenated(blog.title)}`} 
          className="block w-full mt-4 text-decoration-none"
        >
          <button className="w-full rounded-3 bg-white text-gray-800 font-medium py-3 px-4 rounded-xl flex items-center justify-center">
            <span className="text-decoration-none">Read More</span>
            <span className="inline-flex items-center justify-center ml-2 border-1 border-orange-400 rounded-full h-5 w-5">
              <ArrowRight className="h-3 w-3 text-orange-400" />
            </span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;