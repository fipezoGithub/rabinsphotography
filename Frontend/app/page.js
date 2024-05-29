import BlogCard from "@/components/BlogCard";
import ClientSlickCarousel from "@/components/ClientSlickCarousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import PatternDesign from "@/components/PatternDesign";
import Image from "next/image";
import Link from "next/link";
import { FaMap } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import HeroHeaderVideo from "@/components/HeroHeaderVideo";

async function getAllBlogs() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/blogs`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const recentBlogs = await getAllBlogs();

  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)]'>
        <header className='w-full mt-[3.33vmax] py-16'>
          <div className='relative flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col items-center justify-center px-[2.5vmax] py-[4.15vmax] pb-8'>
              <h1 className='capitalize text-[3.75vmax] font-medium px-8 py-4 montserrat md:ml-16 relative flex flex-col items-center justify-center gap-4'>
                <span className='text-center'>
                  Welcome to Rabin&apos;s Photography
                </span>
                <span className='text-center text-[2.5vmax]'>
                  one of the leading photography company in India
                </span>
              </h1>
              <p className='md:ml-16 px-8 py-4 text-[2vmax] md:text-[1.5vmax] md:max-w-[50vmax] text-center'>
                Take a step on a journey of love and laughter as we bring your
                moments to life in the enchanting backdrop of Kolkata.
              </p>
              <Link
                href='/contact-us'
                className='capitalize text-[2vmax] md:text-[1.5vmax] px-6 py-3 bg-blue-600 rounded-xl my-6 text-slate-100'
              >
                schedule meeting
              </Link>
            </div>
            <HeroHeaderVideo />
          </div>
        </header>
        <section className='flex flex-col items-center justify-center mx-8 py-16 gap-6'>
          <h1 className='text-[2.4vmax] font-semibold sm:w-[50vmax] text-center'>
            Rabin&apos;s photography believes in{" "}
            <q>Capturing Moments, Creating Memories.</q>
          </h1>
          <div className='flex flex-col-reverse sm:flex-row items-stert gap-8 my-12'>
            <div className='flex items-start gap-4 sm:gap-8 flex-col max-w-[65vmax] sm:max-w-[35vmax]'>
              <h2 className='text-[1.7vmax] font-medium'>
                Why Rabin&apos;s photography
              </h2>
              <p className='text-[1.2vmax]'>
                At Rabin&apos;s photography, we believe that every moment is
                special and deserves to be captured beautifully. With our team
                of experienced photographers, state-of-the-art equipment, and
                commitment to excellence, we strive to turn your precious
                moments into lasting memories.
              </p>
              <p className='text-[1.2vmax]'>
                Whether it&apos;s a wedding, family portrait, or corporate
                event, we are dedicated to providing you with stunning
                photographs that you will cherish for a lifetime. Choose
                Rabin&apos;s photography for professional photography services
                that exceed your expectations.
              </p>
              <button
                type='button'
                className='text-[1.4vmax] capitalize rounded-3xl bg-blue-600 text-neutral-100 px-4 py-2'
              >
                explore our services
              </button>
            </div>
            <div>
              <Image
                src='/why-us-feature-img.png'
                width={600}
                height={600}
                alt='why-us'
                className='sm:w-[40vmax]'
              />
            </div>
          </div>
        </section>
        <section className='relative overflow-hidden flex flex-col gap-16 items-center'>
          <h1 className='text-[2.4vmax] font-semibold w-[50vmax] text-center'>
            Meet our happy clients
          </h1>
          <ClientSlickCarousel />
        </section>
        <OurServices />
      </main>
      <PatternDesign />
      <section className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)]'>
        <section className='flex flex-col items-center gap-6 justify-center mx-8 py-8'>
          <h1 className='text-[2.4vmax] font-semibold max-w-[50vmax] text-center'>
            Join us on this journey of love, laughter, and pure delight, where
            our photography shines so bright!
          </h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 my-12'>
            <div className='flex flex-col gap-2'>
              <Image
                src='/header-bg.jpg'
                alt='header background'
                width={300}
                height={300}
                className='max-w-[75vmax] md:w-[30.5vmax] rounded-t-xl'
              />
              <div className='flex gap-2'>
                <Image
                  src='/service.jpeg'
                  alt='service'
                  width={150}
                  height={500}
                  className='max-w-[37.5vmax] md:w-[15vmax] rounded-bl-xl'
                />
                <Image
                  src='/contact.jpeg'
                  alt='contact'
                  width={150}
                  height={500}
                  className='max-w-[37.5vmax] md:w-[15vmax] rounded-br-xl'
                />
              </div>
            </div>
            <div className='flex flex-col items-center md:items-start gap-4 md:max-w-[50vmax]'>
              <h1 className='text-[2.5vmax] font-bold uppercase tracking-wider'>
                we capture your essentials moments &amp; create memories
              </h1>
              <p className='text-[1.4vmax] text-slate-800'>
                Our team is highly skilled and dedicated professional wedding
                photographers based in Kolkata and its nearby residencies, we
                take great pride in our ability to document every precious
                moment of your once-in-a-lifetime event.
              </p>
              <Link
                href='/contact-us'
                className='flex items-center text-[1.4vmax] capitalize rounded-3xl bg-blue-600 text-neutral-100 px-4 py-2'
              >
                contact now <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </section>
        <section className='flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 mx-8 py-8'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.598080797767!2d88.39175077475778!3d22.594130832181893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b182fd5f73%3A0xc2d04a221fb9ff27!2sRabin&#39;s%20Photography%C2%AD!5e0!3m2!1sen!2sin!4v1712124953250!5m2!1sen!2sin'
            className='border-0 max-w-[40vmax] sm:min-w-[55vmax] min-h-[35vmax] rounded-xl shadow-lg'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='sm:max-w-[40vmax] flex flex-col items-start gap-4'>
            <h2 className='text-[2.5vmax] font-semibold capitalize'>
              contact us
            </h2>
            <p className='text-[1.4vmax] font-medium'>
              We are so passionate about making incredible photo & video stories
              for our couples and this just shines through in our images.
              Contact us and let&apos;s together discuss &amp; plan your iconic
              cinematic wedding.
            </p>
            <h3 className='flex items-center gap-2'>
              <FaMap className='text-[1.7vmax] md:text-[2.5vmax]' />
              <a
                href='https://maps.app.goo.gl/GFvCkLNY9P73LQCu9'
                target='_blank'
                className='font-medium hover:text-teal-500 text-[1.7vmax]'
              >
                17/40A, Dakshindari Rd, Dakshindari, South Dumdum, West Bengal
                700048
              </a>
            </h3>
            <h3 className='flex items-center gap-2'>
              <IoMail className='text-[1.7vmax] peer-hover:text-teal-500' />
              <a
                href='mailto:rabinsphotography'
                className='font-medium hover:text-teal-500 peer text-[1.7vmax]'
              >
                rabinsphotography@gmail.com
              </a>
            </h3>
            <h3 className='flex items-center gap-2'>
              <FaPhoneAlt className='text-[1.7vmax] peer-hover:text-teal-500' />
              <a
                href='tel:+919038858523'
                className='font-medium hover:text-teal-500 peer text-[1.7vmax]'
              >
                +91 90388 58523
              </a>
            </h3>
          </div>
        </section>
        <section className='flex flex-col items-center justify-center gap-6 py-8'>
          <div className='flex flex-col items-center gap-3'>
            <h1 className='text-[2vmax] uppercase font-bold'>
              LATEST BLOG POSTS
            </h1>
            <p className='text-[1.4vmax] font-medium'>
              Here&apos;s a log of our explorations, that we love to share with
              you!
            </p>
          </div>
          <div className='flex items-start justify-center gap-6 my-8 mx-4 sm:mx-0 flex-wrap'>
            {recentBlogs?.slice(0, 6).map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
          <Link
            href='/blogs'
            className='text-[1.4vmax] capitalize bg-blue-600 text-white font-semibold rounded-3xl px-6 py-2 hover:bg-white hover:text-blue-600 transition duration-500 delay-75'
          >
            view more
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
}
