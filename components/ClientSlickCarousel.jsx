import React from "react";
import Image from "next/image";

const ClientSlickCarousel = () => {
  const clientsLogo = [
    "/Marks_&_Spencer_new_logo.png",
    "/giva_logo.png",
    "/mahindra_first_choice_logo.png",
    "/svf_logo.png",
    "/Raj_Chak_Ent.png",
    "/gold_gym_logo.png",
    "/pss-entertainment_logo.png",
    // "/Pony-up-salon_logo.png",
  ];
  return (
    <div className='whitespace-nowrap relative animate-[marquee_15s_linear_infinite] flex items-center gap-4'>
      {clientsLogo.map((item, index) => (
        <div className='flex-[0_0_20%]' key={index}>
          <Image
            src={item}
            alt='company 1'
            width={600}
            height={400}
            className='inline-block w-[12vw]'
          />
        </div>
      ))}

      {clientsLogo.map((item, index) => (
        <div className='flex-[0_0_20%]' key={index}>
          <Image
            src={item}
            alt='company 2'
            width={600}
            height={400}
            className='inline-block w-[12vw]'
          />
        </div>
      ))}
    </div>
  );
};

export default ClientSlickCarousel;
