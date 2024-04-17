import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className='max-w-[45vmax] sm:max-w-[25vmax] flex flex-col items-start gap-3'
    >
      <Image
        src={`/blogcovers/${blog.blogCover}`}
        alt='blog-cover'
        width={600}
        height={400}
        className='rounded-xl max-w-[45vmax] sm:max-w-[25vmax]'
      />
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-[1.5vmax] capitalize font-medium text-[#323131]'>
          {blog.title}
        </h1>
        <p className='text-[1.2vmax] font-medium max-w-[60vmax] text-[#323131]'>
          {new Date(`${blog.createdAt}`).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
