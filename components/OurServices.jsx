"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const OurServices = () => {
  const [weddingCount, setWeddingCount] = useState(0);
  const [preWeddingCount, setPreWeddingCount] = useState(0);
  const [corporateCount, setCorporateCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const countDownRef = useRef();

  const services = [
    {
      title: "wedding photography",
      description:
        "Elegant wedding photography capturing your special day with timeless beauty.",
      imgSrc: "/wedding-service-cover.jpg",
    },
    {
      title: "pre-wedding photography",
      description:
        "Capture the love and excitement before your big day with our pre-wedding photography services.",
      imgSrc: "/pre-wedding-service-cover.jpg",
    },
    {
      title: "maternity & baby photography",
      description:
        "Cherish the beauty of motherhood or the precious moments of your baby's early days with our photography services.",
      imgSrc: "/maternity-service-cover.jpg",
    },
    {
      title: "rice ceremony photography",
      description:
        "Preserve the joy and tradition of your child's rice ceremony with our professional photography services.",
      imgSrc: "/rice-ceremony-service-cover.jpg",
    },
  ];

  const duration = 100; // Animation duration in milliseconds
  const totalSteps = 300;
  const step = totalSteps / duration;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countDownRef.current) {
      observer.observe(countDownRef.current);
    }

    return () => {
      if (countDownRef.current) {
        observer.unobserve(countDownRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let weddingAnimationFrameId,
      preWeddingAnimationFrameId,
      corporateAnimationFrameId,
      babyAnimationFrameId;
    if (isVisible && weddingCount < totalSteps) {
      const updateCount = () => {
        setWeddingCount((prevCount) => {
          const newCount = Math.round(Math.min(prevCount + step, totalSteps));
          return newCount;
        });
        if (weddingCount < totalSteps) {
          weddingAnimationFrameId = requestAnimationFrame(updateCount);
        }
      };
      weddingAnimationFrameId = requestAnimationFrame(updateCount);
    }

    if (isVisible && preWeddingCount < 150) {
      const updateCount = () => {
        setPreWeddingCount((prevCount) => {
          const newCount = Math.round(Math.min(prevCount + 150 / 100, 150));
          return newCount;
        });
        if (preWeddingCount < 150) {
          preWeddingAnimationFrameId = requestAnimationFrame(updateCount);
        }
      };
      preWeddingAnimationFrameId = requestAnimationFrame(updateCount);
    }

    if (isVisible && corporateCount < 50) {
      const updateCount = () => {
        setCorporateCount((prevCount) => {
          const newCount = Math.round(Math.min(prevCount + 50 / 100, 50));
          return newCount;
        });
        if (corporateCount < 50) {
          corporateAnimationFrameId = requestAnimationFrame(updateCount);
        }
      };
      corporateAnimationFrameId = requestAnimationFrame(updateCount);
    }

    if (isVisible && babyCount < 30) {
      const updateCount = () => {
        setBabyCount((prevCount) => {
          const newCount = Math.round(Math.min(prevCount + 30 / 50, 30));
          return newCount;
        });
        if (babyCount < 30) {
          babyAnimationFrameId = requestAnimationFrame(updateCount);
        }
      };
      babyAnimationFrameId = requestAnimationFrame(updateCount);
    }

    if (!isVisible) {
      setWeddingCount(0);
      setPreWeddingCount(0);
      setCorporateCount(0);
      setBabyCount(0);
    }

    return () => {
      cancelAnimationFrame(weddingAnimationFrameId);
      cancelAnimationFrame(preWeddingAnimationFrameId);
      cancelAnimationFrame(corporateAnimationFrameId);
      cancelAnimationFrame(babyAnimationFrameId);
    };
  }, [isVisible]);

  // useEffect(() => {
  //   const apiKey = "AIzaSyDZiKp_JxAzRMJqshXDI_qatBD5Td3hwTA";
  //   const placeId = "Rabin's+Photography%C2%AD/@22.5941259,88.3917508,17z";
  //   // fetch(
  //   //   `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
  //   // )
  //   // fetch(
  //   //   `https://mybusiness.googleapis.com/v4/accounts/14037801548935462695/locations/${placeId}/reviews`
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     const reviews = data;
  //   //     console.log(reviews);
  //   //   });
  // }, []);

  return (
    <section className='flex flex-col items-center justify-center mx-8 py-16 gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='capitalize font-bold text-[2.4vmax]'>
          our top-notch services
        </h1>
        <p className='text-[1.2vmax] font-medium'>
          Fields where already present our marks, not only in Kolkata but also
          many big cities.
        </p>
      </div>
      <div className='flex flex-wrap gap-8 items-center justify-center sm:w-[75vmax]'>
        {services.map((service, id) => (
          <div className='flex items-center gap-6' key={id}>
            <div>
              <Image
                src={service.imgSrc}
                alt='service'
                width={400}
                height={600}
                className='w-[45vmax] h-[25vmax]   sm:w-[15vmax] sm:h-[20vmax] rounded-3xl object-cover aspect-square'
              />
            </div>
            <div className='flex flex-col items-start sm:w-[15vmax] gap-3'>
              <h2 className='capitalize text-[1.7vmax] font-semibold'>
                {service.title}
              </h2>
              <p className='text-[1.4vmax]'>{service.description}</p>
              <button
                type='button'
                className='flex items-center gap-1 text-[1vmax] uppercase tracking-widest hover:text-[#8969bd]'
              >
                know more <FiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        href='/services'
        className='text-[1.4vmax] capitalize bg-blue-600 text-white font-semibold rounded-3xl px-6 py-2 hover:bg-white hover:text-blue-600 transition duration-500 delay-75'
      >
        view more
      </Link>
      <div
        className='grid grid-cols-2 gap-[3.5vmax] sm:gap-0 sm:flex items-center justify-between sm:w-[75vmax]'
        ref={countDownRef}
      >
        <div className='flex items-center gap-4 bg-white py-[2vmax] min-w-[15vmax] px-[2vmax] justify-center rounded-xl shadow-md'>
          <div>
            <Image
              src='/wedding.png'
              width={50}
              height={50}
              alt='wedding'
              className='w-[5vmax]'
            />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-[1.5vmax] font-bold text-neutral-700'>
              {weddingCount}+
            </h2>
            <p className='capitalize text-[1.1vmax] font-medium text-neutral-700'>
              wedding
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white py-[2vmax] min-w-[15vmax] px-[2vmax] justify-center rounded-xl shadow-md'>
          <div>
            <Image
              src='/pre-wedding.png'
              width={50}
              height={50}
              alt='wedding'
              className='w-[5vmax]'
            />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-[1.5vmax] font-bold text-neutral-700'>
              {preWeddingCount}+
            </h2>
            <p className='capitalize text-[1.1vmax] font-medium text-neutral-700'>
              pre-wedding
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white py-[2vmax] min-w-[15vmax] px-[2vmax] justify-center rounded-xl shadow-md'>
          <div>
            <Image
              src='/corporate.png'
              width={50}
              height={50}
              alt='wedding'
              className='w-[5vmax]'
            />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-[1.5vmax] font-bold text-neutral-700'>
              {corporateCount}+
            </h2>
            <p className='capitalize text-[1.1vmax] font-medium text-neutral-700'>
              corporate
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white py-[2vmax] min-w-[15vmax] px-[2vmax] justify-center rounded-xl shadow-md'>
          <div>
            <Image
              src='/baby.png'
              width={50}
              height={50}
              alt='wedding'
              className='w-[5vmax]'
            />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-[1.5vmax] font-bold text-neutral-700'>
              {babyCount}+
            </h2>
            <p className='capitalize text-[1.1vmax] font-medium text-neutral-700 text-center'>
              baby &amp; maternity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
