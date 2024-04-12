"use client";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const PatternDesign = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showingText = ["wedding", "pre wedding", "maternity", "corporate"];
  const changeIndex = () => {
    setCurrentIndex((prev) => (prev + 1) % showingText.length);
  };
  useEffect(() => {
    const textTransition = setInterval(changeIndex, 3000);
    return () => {
      clearInterval(textTransition);
    };
  }, [currentIndex]);

  return (
    <>
      <div className='bg-[url("/pattern-bg.png")] bg-cover bg-center bg-repeat min-h-[90vh] flex items-center justify-center will-change-[background-size] fixed top-[10%] left-0 w-full -z-10'></div>
      <div className='flex flex-col gap-6 items-center justify-center bg-[rgba(255,255,255,0.9)] px-8 py-4 rounded-md md:min-h-[52vh]'>
        <h3 className='text-[1.3vmax] font-bold text-neutral-700 uppercase'>
          we provide best
        </h3>
        <h1 className='text-[3vmax] sm:text-[5vmax] font-bold gradient-text capitalize'>
          {showingText[currentIndex]} photography
        </h1>
        <p className='text-[1.4vmax] sm:text-[1.8vmax] font-medium text-neutral-700 text-center'>
          Capturing Love Stories: Book Our Stunning {showingText[currentIndex]}{" "}
          photography Today! Preserve your cherished moments with our expert
          team.
        </p>
        <button
          type='button'
          className='font-medium capitalize text-blue-600 text-[1.5vmax] flex items-center gap-1 group'
        >
          book now{" "}
          <FaAngleRight className='group-hover:translate-x-2 duration-500' />
        </button>
      </div>
    </>
  );
};

export default PatternDesign;
