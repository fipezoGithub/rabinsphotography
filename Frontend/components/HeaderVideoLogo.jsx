import Image from "next/image";
import React from "react";

const HeaderVideoLogo = ({ imgSrc }) => {
  return (
    <header className='mt-[6vmin] py-10 flex flex-col items-center gap-6'>
      {!imgSrc ? (
        <video
          src='/signature_video.mp4'
          autoPlay
          muted
          loop
          className='max-h-[80vh] w-screen object-fill'
        ></video>
      ) : (
        <Image
          src={`/${imgSrc}`}
          alt='header-banner'
          width={1920}
          height={720}
          className='max-h-[80vh] w-screen object-fill'
        />
      )}
    </header>
  );
};

export default HeaderVideoLogo;
