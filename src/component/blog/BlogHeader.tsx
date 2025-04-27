import React, { useState, useRef, useEffect } from "react";
import { IBlog } from "@/types";
import Image from "next/image";
import { Share2, Copy, Mail, Facebook, Twitter, Send, Linkedin, MessageSquare, Globe } from "lucide-react";
import formatDate from "@/utils/formatDateString";
import { motion } from 'framer-motion';

// BlogHeader component with title and image
type BlogHeaderProps = Pick<IBlog, "cover_image" | "blog_title" | "blog_authorName" | "created_date" | "blog_description">;

const BlogHeader: React.FC<{ blog: BlogHeaderProps }> = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle share options visibility
  const toggleShareOptions = () => {
    setIsOpen(!isOpen);
  };

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setIsOpen(false);
  };

  // Share options
  const shareOptions = [
    { name: "Copy link", icon: <Copy size={18} />, action: copyLink },
    { name: "Email", icon: <Mail size={18} />, action: () => window.open(`mailto:?subject=${encodeURIComponent(blog.blog_title)}&body=${encodeURIComponent(currentUrl)}`) },
    { name: "Facebook", icon: <Facebook size={18} />, action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`) },
    { name: "X", icon: <Twitter size={18} />, action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.blog_title)}`) },
    { name: "Telegram", icon: <Send size={18} />, action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.blog_title)}`) },
    { name: "LinkedIn", icon: <Linkedin size={18} />, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`) },
    { name: "Whatsapp", icon: <MessageSquare size={18} />, action: () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.blog_title + " " + currentUrl)}`) },
    { name: "Reddit", icon: <Globe size={18} />, action: () => window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.blog_title)}`) }
  ];

  return (
    <header className="min-h-screen text-white relative">
      <div className="flex flex-col gap-0">
        {/* Author and date section */}
        <motion.div   
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
          className="flex items-center justify-between"
        >
          <div className="text-base text-white">{blog.blog_authorName + " • " + formatDate(blog.created_date)}</div>
          <button 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors mt-4" 
            onClick={toggleShareOptions}
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mt-2"
          initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}   
        >
          {blog.blog_title}
        </motion.h1>

        {/* Featured Image */}
        <motion.div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mt-4"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 4, ease: 'easeInOut' }}   
        >
          <Image
            src={blog.cover_image}
            width={1386}
            height={500}
            className="object-cover rounded-lg w-full h-full object-center"
            alt={blog.blog_title}
            priority
          />
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div
        className="max-w-none py-8 text-xl text-gray-300 border-b border-white"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 4, ease: 'easeInOut' }}   
      >
        {blog.blog_description}
      </motion.div>

      {/* Share Options Dropdown */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute top-16 right-0 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10 w-64 overflow-hidden"
        >
          <div className="p-3 border-b border-gray-800">
            <p className="font-medium text-gray-200">Share options</p>
          </div>
          <div className="py-2">
            {shareOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 transition-colors text-left"
              >
                <span className="text-gray-400">{option.icon}</span>
                <span className="text-gray-200">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
