import React from "react";

const WeddingFilter = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 max-w-[60vmax]'>
      <div className='p-2 rounded-full border-2 border-orange-500 group bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-50 font-semibold'>
          all
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          marawari wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          bengali wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          bihari wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          muslim wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          christian wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          south indian wedding
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          north indian wedding
        </p>
      </div>
    </div>
  );
};

export default WeddingFilter;
