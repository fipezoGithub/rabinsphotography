import React from "react";
import Image from "next/image";
import Link from "next/link";

const BabyAndMaternityCard = () => {
  return (
    <Link
      href='/baby-and-maternity/babyId'
      className='flex flex-col gap-4 items-center justify-center'
    >
      <Image
        src='/_DSC4885.jpg'
        alt='wedding'
        width={500}
        height={250}
        className='rounded-xl w-[25vw]'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vw] font-bold text-neutral-800'>
          baby and maternity shoot title
        </h1>
        <p className='text-[1.2vw] font-medium tracking-widest'>
          location / event
        </p>
      </div>
    </Link>
  );
};

export default BabyAndMaternityCard;
