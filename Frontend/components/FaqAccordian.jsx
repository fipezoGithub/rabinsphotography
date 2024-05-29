"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQAccordian({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handelClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isOpen
          ? "bg-white text-gray-950 mx-2 sm:mx-0 sm:w-[75vmax] px-4 shadow-lg"
          : "text-gray-950 bg-white mx-2 sm:mx-0 sm:w-[75vmax] px-4 shadow-lg"
      }
    >
      <h2 id='accordion-flush-heading-1'>
        <button
          type='button'
          onClick={handelClose}
          className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-900 border-b border-gray-200 gap-3'
        >
          <span className='sm:w-[90%] text-left text-[1.8vmax]'>{data.q}</span>
          <IoIosArrowDown className='text-[2.5vmax] sm:text-[1.7vw]' />
        </button>
      </h2>
      <div className={!isOpen ? "hidden" : "block"}>
        <div className='py-5 border-b border-gray-200'>
          <p className='mb-2 text-gray-800 text-[1.5vmax]'>{data.ans}</p>
        </div>
      </div>
    </div>
  );
}
