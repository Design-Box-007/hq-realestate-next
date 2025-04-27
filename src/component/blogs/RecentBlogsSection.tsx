// RecentBlogsSection.tsx
import Link from 'next/link';
import React from 'react';
import BlogCardGrid from './BlogCardGrid';
import { IBlog } from '@/types';

interface RecentBlogsSectionProps {
  blogs: IBlog[];
  title?: string;
  viewAllLink?: string;
  limit?: number;
}

const RecentBlogsSection: React.FC<RecentBlogsSectionProps> = ({ 
  blogs, 
  title = "Recent Blogs",
  viewAllLink = "/blog",
  limit = 3
}) => {
  // Take only the first 'limit' number of blogs (default: 3)
  const limitedBlogs = blogs.slice(0, limit);
  
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-[32px] leading-[48px] font-medium font-poppins text-white">
          {title}
        </h4>
        <Link 
          href={viewAllLink} 
          className="flex items-center text-black text-decoration-none bg-white rounded-full px-4 py-2 text-sm hover:text-white hover:bg-black transition-all duration-300"
        >
          View All
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
      <BlogCardGrid blogs={limitedBlogs} />
    </section>
  );
};

export default RecentBlogsSection;

// Usage example:
// import RecentBlogsSection from '@/components/RecentBlogsSection';
//
// function HomePage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <RecentBlogsSection 
//         blogs={blogsData} 
//         title="Explore Our Blogs" 
//         viewAllLink="/blog"
//         limit={3} // Shows only the first 3 blogs (indexes 0-2)
//       />
//     </div>
//   );
// }