'use client'

import React from "react";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import StepNavigation from "../Common/StepNavigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BlogCardGrid: React.FC<{ blogs: IBlog[] }> = ({ blogs }) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  
  const blogsPerPage = 6; // 👈 how many blogs per page you want (you can change)
  const totalSteps = Math.ceil(blogs.length / blogsPerPage); // 👈 total pages auto-calculated

  const startIndex = (currentStep - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const scrollToGrid = () => {
    const gridElement = document.getElementById('blog-grid');
    if (gridElement) {
      const offset = 80; // Adjust if needed
      const topPosition = gridElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      scrollToGrid();
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      scrollToGrid();
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    scrollToGrid();
  };

  return (
    <>
      <motion.section
        id="blog-grid"
        className="grid p-[14px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-poppins"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {paginatedBlogs.map((blog: IBlog, index: number) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </motion.section>

      {/* Step Navigation below */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onStepClick={handleStepClick}
      />
    </>
  );
};

export default BlogCardGrid;
