"use client";
import React, { useEffect, useRef } from "react";

const BlogContent = ({ data }) => {
  const bodyRef = useRef();
  useEffect(() => {
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    if (bodyRef.current.childNodes.length === 0) {
      bodyRef.current.appendChild(html.body);
    }
  }, [data, bodyRef.current]);
  return (
    <div
      className='text-[1.5vmax] sm:text-[1.2vmax] font-medium max-w-[60vmax] text-[#323131]'
      ref={bodyRef}
    ></div>
  );
};

export default BlogContent;
