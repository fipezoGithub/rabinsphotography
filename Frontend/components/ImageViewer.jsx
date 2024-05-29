"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageViewerComponent = ({ image, index, data, imagePrefix }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const pathName = usePathname();

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const img2Show = data.map((item) => "${process.env.NEXT_PUBLIC_SERVER_URI}/images/" + item);

  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${image}`}
        alt='gallery image'
        width={600}
        height={400}
        onClick={() => openImageViewer(index)}
        className='w-[20vmax] h-[20vmax] object-cover cursor-pointer hover:scale-110 transition duration-500'
      />
      {isViewerOpen && (
        <ImageViewer
          src={img2Show}
          currentIndex={currentImage}
          disableScroll
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1100 }}
        />
      )}
    </>
  );
};

export default ImageViewerComponent;
