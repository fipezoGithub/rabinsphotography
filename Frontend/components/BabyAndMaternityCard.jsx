import React from "react";
import Image from "next/image";
import Link from "next/link";

const BabyAndMaternityCard = ({ event }) => {
  return (
    <Link
      href={`/baby-and-maternity/${event._id}`}
      className='flex flex-col gap-4 items-center justify-center'
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${event.images[0]}`}
        alt='wedding'
        width={500}
        height={250}
        className='rounded-xl w-[25vmax]'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vmax] font-bold text-neutral-800'>
          {event.title}
        </h1>
        <p className='text-[1.2vmax] font-medium tracking-widest'>
          {event.location} / {event.eventtype}
        </p>
      </div>
    </Link>
  );
};

export default BabyAndMaternityCard;
