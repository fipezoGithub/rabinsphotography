import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ portfolio }) => {
  return (
    <Link
      href={`/portfolios/${portfolio._id}`}
      className='flex flex-col gap-4 items-center justify-center'
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${portfolio.images[0]}`}
        alt='wedding'
        width={500}
        height={250}
        className='rounded-xl w-[25vmax] h-[35vmin] object-cover'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vmax] font-bold text-neutral-800'>
          {portfolio.title}
        </h1>
        <p className='text-[1.2vmax] font-medium tracking-widest'>
          {portfolio.location} / {portfolio.eventtype}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCard;
