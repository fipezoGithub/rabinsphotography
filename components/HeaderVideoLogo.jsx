import React from "react";

const HeaderVideoLogo = () => {
  return (
    <header className='mt-10 py-10 flex flex-col items-center gap-6'>
      <video
        src='/signature_video.mp4'
        autoPlay
        muted
        loop
        className='max-h-[70vh] w-screen object-fill'
      ></video>
    </header>
  );
};

export default HeaderVideoLogo;
