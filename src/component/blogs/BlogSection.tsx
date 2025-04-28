'use client'

import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import { useGetBlogs } from '@/hooks/useGetBlogs'
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import blogListDataV2 from '@/data/blog-v2';
import { IBlog } from '@/types';

const BlogSection = () => {

    const { blogs } = useGetBlogs();

    const newBlogData: IBlog[] = blogs.length > 4 ? blogs : [...blogs, ...blogListDataV2.slice(0, 2)];


    return (
        <section className='px-2 py-10 space-y-4'>
            <div className='flex w-full justify-between items-center px-4'>
                <h4 className={'text-[56px] font-normal font-inter !text-white'}>{'Explore our Blogs'}</h4>
                <Link href={'/blogs'} className='text-decoration-none'>
                    <button className={'!py-[10px] !px-6 !bg-white !text-black font-medium text-xl flex justify-between items-center !rounded-full'}>
                        <span>{"View All"}</span>
                        <FaAngleRight />
                    </button>
                </Link>
            </div>
            <BlogCardGrid blogs={newBlogData.slice(0, 3)} />
        </section>
    )
}

export default BlogSection