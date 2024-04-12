"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/_DSC4885.jpg",
  "/about-us-team.jpg",
  "/contact.jpeg",
  "/header-bg.jpg",
  "/service.jpeg",
  "/team_player.jpg",
];

const ContactUsTransition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:flex flex-col gap-6">
      <div className='relative w-[30vw] h-[20vw] overflow-hidden'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`image-${index}`}
            width={400}
            height={400}
            className={`absolute top-0 left-0 w-[30vw] h-[20vw] object-contain transition duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className='max-w-[30vw] flex flex-col gap-4'>
        <h1 className='text-[1.5vw] font-bold capitalize text-gray-800'>why choose us?</h1>
        <p className="text-[1vw] font-medium text-gray-800">
          At Rabin&apos;s photography, we believe that every moment is special
          and deserves to be captured beautifully. With our team of experienced
          photographers, state-of-the-art equipment, and commitment to
          excellence, we strive to turn your precious moments into lasting
          memories. Whether it&apos;s a wedding, family portrait, or corporate
          event, we are dedicated to providing you with stunning photographs
          that you will cherish for a lifetime. Choose Rabin&apos;s photography
          for professional photography services that exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default ContactUsTransition;
