'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IBlog } from "@/types";
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

const BlogCard: React.FC<{ blog: IBlog }> = ({ blog }) => {
  return (
    <motion.div
      className="flex flex-col justify-between overflow-hidden rounded-xl !p-3 bg-[#222222]"
      variants={cardVariants}
    >
      <div className="relative w-full h-60 rounded-xl overflow-hidden mb-4">
        <Image
          src={blog.cover_image}
          alt={blog.blog_title}
          layout="fill"
          className="object-cover"
        />
      </div>

      <h3 className="fs-4 font-bold text-white">{blog.blog_title}</h3>
      <p className="text-base text-gray-300 mt-2 line-clamp-3">{blog.blog_description}</p>
      <Link
        href={`/blog/${formatToHyphenated(blog.blog_title)}`}
        className="block w-full mt-4 text-decoration-none"
      >
        <button className="w-full rounded-3 bg-white text-gray-800 font-medium py-3 px-4 rounded-xl flex items-center justify-center">
          <span className="text-decoration-none">Read More</span>
          <span className="inline-flex items-center justify-center ml-2 border-1 border-orange-400 rounded-full h-5 w-5">
            <ArrowRight className="h-3 w-3 text-orange-400" />
          </span>
        </button>
      </Link>
    </motion.div>
  );
};

export default BlogCard;