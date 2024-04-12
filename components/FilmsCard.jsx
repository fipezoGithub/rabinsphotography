import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuAddFill } from "react-icons/ri";

const FilmsCard = () => {
  return (
    <Link
      href='/films/1245321'
      className='flex flex-col items-center justify-center gap-4'
    >
      <div className='relative'>
        <Image
          src='/header-bg.jpg'
          alt='film-cover'
          width={400}
          height={200}
          className='rounded-xl w-[25vw]'
        />
        <div className='absolute top-0 right-0 h-full flex items-center justify-center bg-black bg-opacity-45 min-w-[8vw] rounded-r-xl'>
          <div className='flex flex-col items-center justify-center m-4 gap-2'>
            <p className='text-white text-[1.5vw] font-semibold'>10</p>
            <RiMenuAddFill className='text-white text-[1.5vw]' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='font-semibold text-[1.7vw] text-[#323131]'>
          Bengali Wedding
        </h1>
        <p className='capitalize font-semibold text-[1.4vw] text-[#323131]'>
          location
        </p>
      </div>
    </Link>
  );
};

export default FilmsCard;
