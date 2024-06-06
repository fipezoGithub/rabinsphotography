"use client";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const ReelsWithThumb = ({ item }) => {
  return (
    <blockquote
      className='instagram-media'
      data-instgrm-captioned=''
      data-instgrm-permalink={`${item.uri}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version={14}
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 24,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: 1,
        padding: 0,
      }}
    >
      <div className='flex items-center justify-center'>
        <a
          href={`${item.uri}?utm_source=ig_embed&utm_campaign=loading`}
          target='_blank'
          className='relative'
        >
          <video
            src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${item.videoSrc}`}
            className='max-w-[18vmax] rounded-3xl shadow-2xl'
            autoPlay
            loop
            muted
          ></video>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-700 bg-opacity-30 rounded-3xl'>
            <button
              type='button'
              className='bg-[#b13c73] p-4 rounded-full flex items-center justify-center bg-opacity-70'
            >
              <FaPlay className='w-[5vmax] h-[5vmax] text-white' />
            </button>
          </div>
        </a>
      </div>
    </blockquote>
  );
};

export default ReelsWithThumb;
