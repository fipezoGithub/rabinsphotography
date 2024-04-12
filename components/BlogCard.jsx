import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <Link
      href={`/blogs/12345`}
      className='max-w-[45vmax] sm:max-w-[25vmax] flex flex-col items-start gap-3'
    >
      <Image
        src='/_DSC4885.jpg'
        alt='blog-cover'
        width={600}
        height={400}
        className='rounded-xl max-w-[45vmax] sm:max-w-[25vmax]'
      />
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-[1.5vmax] capitalize font-medium text-[#323131]'>
          13 Unique And Creative Outdoor Baby Photography Ideas
        </h1>
        <p className='text-[1.2vmax] font-medium max-w-[60vmax] text-[#323131]'>
          30 AUG, 2023
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
