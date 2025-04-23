
import Blogs from '@/component/blogs/Blogs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Interior Design Blog | Space Sculpt',
    description: 'Read expert interior design tips, trends, and ideas from Space Sculpt. Stay updated with the latest in home decor!',
    robots: 'index, follow',
    alternates: {
        canonical: 'http://spacesculpt.ae/blogs',
    },
};

const Page = () => {
    return <Blogs />;
};

export default Page;
