"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const BookPopupModal = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      if (!visible) {
        setVisible(true);
      }
    }, 300000);
  }, [pathname]);

  return (
    <aside
      className={`fixed top-0 left-0 w-full h-full ${
        !visible ? "hidden" : "flex"
      } items-center justify-center backdrop-blur-sm overflow-hidden bg-[rgba(0,0,0,0.4)]`}
    >
      <div className='flex flex-col items-center justify-center bg-white max-w-[40vmax] sm:max-w-[30vmax] rounded-xl relative'>
        <button
          type='button'
          onClick={() => setVisible(false)}
          className='absolute top-2 right-2 text-[1.7vmax] bg-neutral-500 rounded-full bg-opacity-60'
        >
          <IoMdClose />
        </button>
        <div>
          <Image
            src='/_DSC4885.jpg'
            alt='form-image'
            width={500}
            height={250}
            className='w-[43vmax] sm:w-[30vmax] rounded-t-xl h-[22vmax] sm:h-[13vmax] object-cover'
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-2'>
          <h1 className='text-[1.7vmax] font-bold text-orange-500'>
            Capture the Moment
          </h1>
          <p className='text-[1.3vmax] font-medium text-orange-500 text-center'>
            Want to freeze your special moments? Make it happen with us!
          </p>
          <button
            type='button'
            className='text-[1.3vmax] font-medium bg-orange-500 capitalize text-neutral-100 rounded-3xl px-4 py-1'
          >
            book now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BookPopupModal;
