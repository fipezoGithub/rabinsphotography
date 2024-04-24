import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <Link
      href={`/events/${event._id}`}
      className='flex flex-col gap-4 items-center justify-center'
    >
      <Image
        src={`/api/images/${event.images[0]}`}
        alt={`${event.title?.split(" ").join("_")}_thumb`}
        width={500}
        height={250}
        className='rounded-xl w-[25vmax]'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[1.7vmax] font-bold text-neutral-800'>
          {event.title}
        </h1>
        <p className='text-[1.2vmax] font-medium tracking-widest'>
          {event.location} / {event.eventtype?.split("_").join(" ")}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
