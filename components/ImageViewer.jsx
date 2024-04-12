"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageViewerComponent = ({ image, index, data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Image
        src={image}
        alt='gallery image'
        width={600}
        height={400}
        onClick={() => openImageViewer(index)}
        className='w-[20vw] h-[20vw] object-cover cursor-pointer hover:scale-110 transition duration-500'
      />
      {isViewerOpen && (
        <ImageViewer
          src={data}
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
