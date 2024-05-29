import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <>
      <div className='bg-[url("/header-bg.jpg")] bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center will-change-[background-size] fixed top-[10%] left-0 w-full -z-10'></div>
      <div className='flex flex-col gap-6 items-center justify-center bg-[rgba(0,0,0,0.3)] px-8 py-4 rounded-md min-h-[20vh] sm:min-h-[42vh]'>
        <h1 className='text-[2vw] font-bold text-slate-100'>
          Let&apos;s make something great together.
        </h1>
        <Link
          href='/contact-us'
          className='bg-slate-100 px-4 py-2 rounded-3xl capitalize text-[1.3vw]'
        >
          get in touch
        </Link>
      </div>
    </>
  );
};

export default GetInTouch;
