import React from "react";

const PortfolioFilter = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 max-w-[60vmax]'>
      <div className='p-2 rounded-full border-2 border-orange-500 group bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-50 font-semibold'>
          all
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          fashion portfolio
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          indoor shoot
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          outdoor shoot
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          matrimonial shoot
        </p>
      </div>
      <div className='p-2 rounded-full border-2 border-orange-500 group hover:bg-orange-500'>
        <p className='text-[1.2vmax] capitalize text-orange-600 group-hover:text-orange-50 font-semibold'>
          corporate portfolios
        </p>
      </div>
    </div>
  );
};

export default PortfolioFilter;
