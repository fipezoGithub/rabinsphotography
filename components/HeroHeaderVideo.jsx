"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const HeroHeaderVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div className='relative'>
        <video
          src='/header-thumb.mp4'
          className='max-w-[40vmax] sm:max-w-[70vmax] md:max-w-[55vmax] rounded-3xl shadow-2xl'
          autoPlay
          loop
          muted
        ></video>
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-700 bg-opacity-30 rounded-3xl'>
          <button
            type='button'
            className='bg-[#b13c73] p-4 rounded-full flex items-center justify-center bg-opacity-70'
            onClick={() => setShowVideo(true)}
          >
            <FaPlay className='w-[5vmax] h-[5vmax] text-white' />
          </button>
        </div>
      </div>
      {showVideo && (
        <div className='fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-neutral-800 z-[1100] bg-opacity-50'>
          <button
            type='button'
            onClick={() => setShowVideo(false)}
            className='text-[6vw] absolute top-0 right-0 text-neutral-200'
          >
            <IoIosClose />
          </button>
          <iframe
            className='border-0 min-w-[85vmax] min-h-[45vmax]'
            src='https://www.youtube.com/embed/m3QVA-jjvd8?si=7Ri5bjZlUG6w3L4R&rel=0?version=3&autoplay=1&&showinfo=0&loop=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default HeroHeaderVideo;
