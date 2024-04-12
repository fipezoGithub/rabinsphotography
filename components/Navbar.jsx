"use client";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { IoClose, IoLogoLinkedin, IoMenu } from "react-icons/io5";
import { useState } from "react";
import {
  FaAngleRight,
  FaFacebook,
  FaPinterest,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const handelShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='flex items-center justify-between px-[3vmax] md:px-[10vmax] py-5 fixed top-0 left-0 w-full z-[1100] text-white gradient'>
      <div className='flex items-center gap-[2vmax]'>
        <button
          type='button'
          className='text-[2.9vmax] md:hidden'
          onClick={handelShowMenu}
        >
          <IoMenu />
        </button>
        <Link
          href='/'
          className='text-[2vmax] sm:text-[2.9vmax] md:text-[2vmax] capitalize font-bold'
        >
          rabin&apos;s photography
        </Link>
      </div>
      <ul className='hidden md:flex items-center gap-[2vmax]'>
        <div className='group/main relative'>
          <li className='flex items-center gap-1 text-[1.2vmax] capitalize group-hover/main:text-[#af89ee] group-hover/main:bg-[#141217] px-3 py-1 rounded-xl cursor-default'>
            services
          </li>
          <div className='absolute top-full -left-0 -translate-x-1/2 bg-black px-8 py-4 invisible group-hover/main:visible flex items-start my-10 gap-4 transition-all origin-top-right opacity-0 group-hover/main:opacity-100 duration-700 rounded-lg '>
            <ul className='p-4 flex flex-col items-start gap-4 min-w-[17vmax] peer'>
              <li className='flex flex-col items-start relative'>
                <Link
                  href='/weddings'
                  className='text-[1.4vmax] capitalize hover:text-orange-500 flex items-center gap-2 group'
                >
                  weddings
                  <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                    sale{" "}
                    <GoArrowUpRight
                      size={"1.2em"}
                      className='hidden group-hover:inline'
                    />
                  </span>
                </Link>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <Link
                  href='/events'
                  className='text-[1.4vmax] capitalize hover:text-orange-500 flex items-center gap-2 group'
                >
                  events{" "}
                  <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                    sale{" "}
                    <GoArrowUpRight
                      size={"1.2em"}
                      className='hidden group-hover:inline'
                    />
                  </span>
                </Link>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <Link
                  href='/portfolios'
                  className='text-[1.4vmax] capitalize hover:text-orange-500 flex items-center gap-2 group'
                >
                  portfolios
                  <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                    sale{" "}
                    <GoArrowUpRight
                      size={"1.2em"}
                      className='hidden group-hover:inline'
                    />
                  </span>
                </Link>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <Link
                  href='/baby-and-maternity'
                  className='text-[1.4vmax] capitalize hover:text-orange-500 flex items-center gap-2 group'
                >
                  baby &amp; maternity
                  <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                    sale{" "}
                    <GoArrowUpRight
                      size={"1.2em"}
                      className='hidden group-hover:inline'
                    />
                  </span>
                </Link>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='group relative'>
          <li className='flex items-center gap-1 text-[1.2vmax] capitalize group-hover:text-[#af89ee] group-hover:bg-[#141217] px-3 py-1 rounded-xl cursor-default'>
            portfolio
          </li>
          <div className='absolute top-full -left-0 -translate-x-1/2 bg-black invisible group-hover:visible flex items-start my-10 gap-4 transition-all origin-top-right opacity-0 group-hover:opacity-100 duration-700 rounded-lg'>
            <div className='flex flex-col items-start justify-between self-stretch px-8 w-80 py-4'>
              <div className='px-4 py-2'>
                <h3 className='text-xl'>Our best works</h3>
                <p className='text-sm text-neutral-500 font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt sunt dicta et quia nemo laudantium dolor a eos harum
                  accusantium iste itaque
                </p>
              </div>
              <div className='flex items-center justify-center px-4'>
                <Image
                  src='/portfolio-nav-bg.png'
                  alt='prorfoilo-bg'
                  width={400}
                  height={200}
                  className='max-w-[15vmax]'
                />
              </div>
            </div>
            <ul className='px-8 py-4 flex flex-col items-start gap-4 min-w-[20vmax]'>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/gallery'>photos</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/films'>films</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link className='' href='/reels'>
                    reels
                  </Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  albums
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  invitations
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='group relative'>
          <li className='flex items-center gap-1 text-[1.2vmax] capitalize group-hover:text-[#af89ee] group-hover:bg-[#141217] px-3 py-1 rounded-xl cursor-default'>
            resources
          </li>
          <div className='absolute top-full -left-0 -translate-x-1/2 bg-black invisible group-hover:visible flex items-start my-10 gap-4 w-auto transition-all origin-top-right opacity-0 group-hover:opacity-100 duration-700 rounded-lg'>
            <div className='flex flex-col items-start justify-between self-stretch px-8 w-80 py-4 gap-4'>
              <div className='px-4'>
                <h3 className='text-xl'>Our best works</h3>
                <p className='text-sm text-neutral-500 font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt sunt dicta et quia nemo laudantium dolor a eos harum
                  accusantium iste itaque
                </p>
              </div>
              <div className='flex items-center justify-center px-4'>
                <Image
                  src='/resource-nav-bg.png'
                  alt='prorfoilo-bg'
                  width={400}
                  height={200}
                  className='max-w-[15vmax]'
                />
              </div>
            </div>
            <ul className='px-8 py-4 flex flex-col items-start gap-4 min-w-[20vmax]'>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/blogs'>blogs</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  learn
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  editing services
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='https://fipezo.com' target='_blank'>
                    join as a freelancer
                  </Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='group relative'>
          <li className='flex items-center gap-1 text-[1.2vmax] capitalize group-hover:text-[#af89ee] group-hover:bg-[#141217] px-3 py-1 rounded-xl cursor-default'>
            company
          </li>
          <div className='absolute top-full -left-0 -translate-x-1/2 bg-black invisible group-hover:visible flex items-start my-10 gap-4 w-auto transition-all origin-top-right opacity-0 group-hover:opacity-100 duration-700 rounded-lg'>
            <div className='flex flex-col items-start justify-between self-stretch px-8 w-80 py-4'>
              <div className='px-4'>
                <h3 className='text-xl'>Our best works</h3>
                <p className='text-sm text-neutral-500 font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt sunt dicta et quia nemo laudantium dolor a eos harum
                  accusantium iste itaque
                </p>
              </div>
              <div className='flex items-center justify-center px-4'>
                <Image
                  src='/company-nav-bg.png'
                  alt='prorfoilo-bg'
                  width={400}
                  height={200}
                  className='max-w-[15vmax]'
                />
              </div>
            </div>
            <ul className='px-8 py-4 flex flex-col items-start gap-4 min-w-[20vmax]'>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/about_us'>about us</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/careers'>careers</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/contact-us'>contact us</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/faq'>FAQs</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <Link
                  href='/join-us'
                  className='text-[1.4vmax] capitalize hover:text-orange-500'
                >
                  join us
                </Link>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
              <li className='flex flex-col items-start'>
                <h4 className='text-[1.4vmax] capitalize hover:text-orange-500'>
                  <Link href='/reviews'>reviews</Link>
                </h4>
                <p className='text-sm text-neutral-500'>
                  evrything about your speacial day
                </p>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <div className='flex items-center gap-4'>
        <Link
          href='/'
          className='text-[1.6vmax] sm:text-[2.2vmax] md:text-[1.2vmax] bg-blue-600 px-3 py-1 rounded-xl font-semibold capitalize hover:bg-white hover:text-blue-600'
        >
          Download App
        </Link>
      </div>
      <div
        className={`md:hidden flex flex-col gap-[8vmax] absolute top-0 ${
          showMenu ? "left-0" : "-left-full"
        } min-h-screen w-full gradient transition-all duration-500`}
      >
        <div className='flex items-center gap-[2vmax] mx-[2vmax] my-4 justify-between'>
          <Link
            href='/'
            className='text-[2.8vmax] capitalize font-bold'
            onClick={handelShowMenu}
          >
            rabin&apos;s photography
          </Link>
          <button
            type='button'
            className='text-[3.5vmax]'
            onClick={handelShowMenu}
          >
            <IoClose />
          </button>
        </div>
        <ul className='mx-[2vmax] flex flex-col gap-[2vmax]'>
          <div className='border-2 border-neutral-600 rounded-3xl px-4 text-[2.5vmax]'>
            <li
              className='py-2 flex flex-col'
              onClick={() => setShowServices(!showServices)}
            >
              <div className='flex justify-between items-center'>
                <span className='capitalize font-semibold'>services</span>
                <FaAngleRight />
              </div>
            </li>
            <div
              className={`flex items-stretch w-full overflow-hidden transition-all duration-700 ${
                showServices ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <ul className='py-2 flex flex-col items-start gap-2 min-w-[17vmax] peer'>
                <li className='flex flex-col items-start relative'>
                  <Link
                    href='/weddings'
                    onClick={handelShowMenu}
                    className='capitalize hover:text-orange-500 flex items-center gap-2 group'
                  >
                    weddings
                    <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                      sale{" "}
                      <GoArrowUpRight
                        size={"1.2em"}
                        className='hidden group-hover:inline'
                      />
                    </span>
                  </Link>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <Link
                    href='/events'
                    onClick={handelShowMenu}
                    className='capitalize hover:text-orange-500 flex items-center gap-2 group'
                  >
                    events{" "}
                    <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                      sale{" "}
                      <GoArrowUpRight
                        size={"1.2em"}
                        className='hidden group-hover:inline'
                      />
                    </span>
                  </Link>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <Link
                    href='/portfolios'
                    onClick={handelShowMenu}
                    className='capitalize hover:text-orange-500 flex items-center gap-2 group'
                  >
                    portfolios
                    <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                      sale{" "}
                      <GoArrowUpRight
                        size={"1.2em"}
                        className='hidden group-hover:inline'
                      />
                    </span>
                  </Link>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <Link
                    onClick={handelShowMenu}
                    href='/baby-and-maternity'
                    className='capitalize hover:text-orange-500 flex items-center gap-2 group'
                  >
                    baby &amp; maternity
                    <span className='text-xs opacity-80 text-[#af89ee] uppercase border border-[#af89ee] px-1 py-px rounded flex items-center gap-1'>
                      sale{" "}
                      <GoArrowUpRight
                        size={"1.2em"}
                        className='hidden group-hover:inline'
                      />
                    </span>
                  </Link>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-2 border-neutral-600 rounded-3xl px-4 text-[2.5vmax]'>
            <li
              className='py-2 flex flex-col'
              onClick={() => setShowPortfolio(!showPortfolio)}
            >
              <div className='flex justify-between items-center'>
                <span className='capitalize font-semibold'>portfolio</span>
                <FaAngleRight />
              </div>
            </li>
            <div
              className={`flex items-stretch w-full overflow-hidden transition-all duration-700 ${
                showPortfolio ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <ul className='py-2 flex flex-col items-start gap-2 min-w-[17vmax] peer'>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link onClick={handelShowMenu} href='/gallery'>
                      photos
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link href='/films' onClick={handelShowMenu}>
                      films
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link className='' onClick={handelShowMenu} href='/reels'>
                      reels
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    albums
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    invitations
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-2 border-neutral-600 rounded-3xl px-4 text-[2.5vmax]'>
            <li
              className='py-2 flex flex-col'
              onClick={() => setShowResources(!showResources)}
            >
              <div className='flex justify-between items-center'>
                <span className='capitalize font-semibold'>resources</span>
                <FaAngleRight />
              </div>
            </li>
            <div
              className={`flex items-stretch w-full overflow-hidden transition-all duration-700 ${
                showResources ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <ul className='py-2 flex flex-col items-start gap-2 min-w-[17vmax] peer'>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link href='/blogs' onClick={handelShowMenu}>
                      blogs
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    learn
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    editing services
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link
                      href='https://fipezo.com'
                      target='_blank'
                      onClick={handelShowMenu}
                    >
                      join as a freelancer
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-2 border-neutral-600 rounded-3xl px-4 text-[2.5vmax]'>
            <li
              className='py-2 flex flex-col'
              onClick={() => setShowCompany(!showCompany)}
            >
              <div className='flex justify-between items-center'>
                <span className='capitalize font-semibold'>company</span>
                <FaAngleRight />
              </div>
            </li>
            <div
              className={`flex items-stretch w-full overflow-hidden transition-all duration-700 ${
                showCompany ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <ul className='py-2 flex flex-col items-start gap-2 min-w-[17vmax] peer'>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link onClick={handelShowMenu} href='/about_us'>
                      about us
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link onClick={handelShowMenu} href='/careers'>
                      careers
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link onClick={handelShowMenu} href='/contact-us'>
                      contact us
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link onClick={handelShowMenu} href='/faq'>
                      FAQs
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <Link
                    href='/join-us'
                    onClick={handelShowMenu}
                    className='text-xl capitalize hover:text-orange-500'
                  >
                    join us
                  </Link>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
                <li className='flex flex-col items-start'>
                  <h4 className='text-xl capitalize hover:text-orange-500'>
                    <Link href='/reviews' onClick={handelShowMenu}>
                      reviews
                    </Link>
                  </h4>
                  <p className='text-sm text-neutral-300'>
                    evrything about your speacial day
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <div className='mx-[2vmax] flex flex-col gap-[1.75vmax]'>
          <h2 className='text-[2.5vmax] font-semibold'>Follow us on</h2>
          <div className='flex items-center gap-[1.75vmax]'>
            <Link
              onClick={handelShowMenu}
              href='https://www.facebook.com/RabinsPhotography/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <FaFacebook />
            </Link>
            <Link
              onClick={handelShowMenu}
              href='https://www.youtube.com/@RabinsPhotography'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <FaYoutube />
            </Link>
            <Link
              onClick={handelShowMenu}
              href='https://www.instagram.com/rabinsphotography/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <RiInstagramFill />
            </Link>
            <Link
              onClick={handelShowMenu}
              href='https://www.linkedin.com/in/rabinsphotography/'
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              onClick={handelShowMenu}
              href='https://twitter.com/Rabinsclick'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <FaSquareXTwitter />
            </Link>
            <Link
              href='https://in.pinterest.com/rabinsphotography/'
              onClick={handelShowMenu}
              className='text-[4vmax] text-neutral-300 hover:text-white'
            >
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
