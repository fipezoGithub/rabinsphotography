import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='py-16 px-[3vmax] md:px-[10vmax] flex flex-col gap-12 w-full gradient text-white'>
      <div className='flex items-center justify-between'>
        <h1 className='capitalize font-bold text-[3vmax] md:text-[2.5vmax]'>
          {" "}
          rabin&apos;s photography
          <sup className='font-normal text-xl'>&#174;</sup>
        </h1>
        <div className='hidden md:flex items-center gap-[1.75vmax]'>
          <Link
            href='https://www.facebook.com/RabinsPhotography/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <FaFacebook />
          </Link>
          <Link
            href='https://www.youtube.com/@RabinsPhotography'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <FaYoutube />
          </Link>
          <Link
            href='https://www.instagram.com/rabinsphotography/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <RiInstagramFill />
          </Link>
          <Link
            href='https://www.linkedin.com/in/rabinsphotography/'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href='https://twitter.com/Rabinsclick'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href='https://in.pinterest.com/rabinsphotography/'
            className='text-[3vmax] md:text-[2.5vmax] text-neutral-300 hover:text-white'
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap items-start justify-between'>
        <ul className='flex flex-col items-start gap-4'>
          <h3 className='text-[1.7vmax] font-semibold'>Services</h3>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/weddings'>weddings</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/events'>events</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/portfolios'>portfolios</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/baby-and-maternity'>baby &amp; maternity</Link>
          </li>
        </ul>
        <ul className='flex flex-col items-start gap-4'>
          <h3 className='text-[1.7vmax] font-semibold'>Useful Links</h3>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            refer &amp; earn
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            sitemap
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            learn
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            editing services
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='https://fipezo.com' target='_blank'>
              join as a freelancer
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col items-start gap-4'>
          <h3 className='text-[1.7vmax] font-semibold'>Law &amp; Order</h3>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/privacy-policy'>terms &amp; condition</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            data protection
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/privacy-policy'>privacy policy</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            cancellation &amp; refund
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            shipping &amp; delivery
          </li>
        </ul>
        <ul className='flex flex-col items-start gap-4'>
          <h3 className='text-[1.7vmax] font-semibold'>Company</h3>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/about_us'>about us</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/careers'>career</Link>
          </li>
          <li className='capitalize text-[1.3vmax] font-semibold text-neutral-300 hover:text-white'>
            <Link href='/contact-us'>contact us</Link>
          </li>
        </ul>
      </div>
      <hr className='h-px w-full bg-neutral-800 border-none' />
      <div>
        <h1 className='text-[1.5vmax] sm:text-[1.3vmax] text-neutral-300'>
          © 2013-2024 Rabin&apos;s Photography | All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
