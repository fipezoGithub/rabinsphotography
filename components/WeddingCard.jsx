import React from "react";
import Image from "next/image";
import Link from "next/link";

const WeddingCard = ({ wedding }) => {
  return (
    <Link
      href={`/weddings/${wedding._id}`}
      className='flex flex-col gap-4 items-center justify-center'
    >
      <Image
        src={`/wedding/${wedding.husband.toLowerCase()}-${wedding.wife.toLowerCase()}/${
          wedding.images[0]
        }`}
        alt='wedding'
        width={500}
        height={250}
        className='rounded-xl w-[25vmax]'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vmax] font-bold text-neutral-800'>
          {wedding.wife} x {wedding.husband}
        </h1>
        <p className='text-[1.1vmax] font-medium tracking-widest'>
          {wedding.location} / {wedding.weddingtype.split("_").join(" ")}
        </p>
      </div>
    </Link>
  );
};

export default WeddingCard;
