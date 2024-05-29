import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuAddFill } from "react-icons/ri";

const FilmsCard = ({ film }) => {
  return (
    <Link
      href={`/films/${film._id}`}
      className='flex flex-col items-center justify-center gap-4'
    >
      <div className='relative'>
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${film.cover}`}
          alt='film-cover'
          width={400}
          height={200}
          className='rounded-xl w-[40vmax] sm:w-[25vmax]'
        />
        <div className='absolute top-0 right-0 h-full flex items-center justify-center bg-black bg-opacity-45 min-w-[8vmax] rounded-r-xl'>
          <div className='flex flex-col items-center justify-center m-4 gap-2'>
            <p className='text-white text-[1.5vmax] font-semibold'>
              {film.videolinks.length}
            </p>
            <RiMenuAddFill className='text-white text-[1.5vmax]' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='font-semibold text-[1.7vmax] text-[#323131]'>
          {film.title}
        </h1>
      </div>
    </Link>
  );
};

export default FilmsCard;
