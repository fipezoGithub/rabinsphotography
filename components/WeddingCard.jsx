import React from "react";
import Image from "next/image";
import Link from "next/link";

const WeddingCard = () => {
  return (
    <Link href='/weddings/weddingId' className='flex flex-col gap-4 items-center justify-center'>
      <Image
        src='/_DSC4885.jpg'
        alt='wedding'
        width={500}
        height={250}
        className='rounded-xl w-[25vw]'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vw] font-bold text-neutral-800'>
          Brishti x Ganesh
        </h1>
        <p className='text-[1.2vw] font-medium tracking-widest'>
          location / Wedding
        </p>
      </div>
    </Link>
  );
};

export default WeddingCard;
