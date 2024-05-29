import ContactUsTransition from "@/components/ContactUsTransition";
import ContactusForm from "@/components/ContactusForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

export default async function Contact() {
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-16 py-16 flex flex-col items-center mx-8 gap-6'>
          <h1 className='text-[2.5vmax] text-center sm:text-left font-semibold montserrat relative text-neutral-800'>
            Contact Rabin&apos;s Photography For Best Photography Experience
          </h1>
          <p className='py-2 text-[1.4vmax] sm:w-[75vmax] text-center text-neutral-800'>
            Looking for Photographers or Cinematographers? Contact Rabin&apos;s
            Photography; one of the Best photography company in Kolkata. We are
            a passionate team who love capturing the precious moments of our
            couples and this just shines through in our images. We are dedicated
            and give everything to each wedding to make you look the best.
            Contact us now.
          </p>
        </header>
        <section className='flex flex-col items-center gap-4 my-4'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-[2vmax] capitalize font-bold text-neutral-800'>
              contact form
            </h1>
            <p className='text-[1.5vmax] capitalize font-medium text-neutral-800'>
              Fill the form below. Our team will contact you asap
            </p>
          </div>
          <div className='sm:max-w-[80vmax] bg-white bg-opacity-30 backdrop-blur p-6 rounded-xl flex items-center gap-6 shadow-xl'>
            <ContactusForm />
            <ContactUsTransition />
          </div>
        </section>
        <section className='my-4 flex flex-col gap-6'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.598080797767!2d88.39175077475778!3d22.594130832181893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b182fd5f73%3A0xc2d04a221fb9ff27!2sRabin&#39;s%20Photography%C2%AD!5e0!3m2!1sen!2sin!4v1712124953250!5m2!1sen!2sin'
            className='border-0 w-[55vmax] sm:w-[80vmax] h-[35vmax] sm:h-[35vmax] rounded-xl shadow-lg'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='flex flex-col'>
            <h1 className='text-[2vmax] capitalize font-bold text-neutral-800 flex items-center gap-2'>
              <HiOutlineOfficeBuilding />
              <span>operating hours</span>
            </h1>
            <ul>
              <li className='text-[1.2vmax] font-medium text-neutral-800 list-disc ml-4'>
                Monday - Saturday : 10:00 - 19:00
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[2vmax] capitalize font-bold text-neutral-800 flex items-center gap-2'>
              <IoCallOutline />
              <span>contact number</span>
            </h1>
            <ul>
              <li className='text-[1.2vmax] font-medium text-neutral-800 list-disc ml-4 hover:text-blue-600'>
                <a href='tel:+919038858523'>+91 90388 58523</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[2vmax] capitalize font-bold text-neutral-800 flex items-center gap-2'>
              <HiOutlineMail />
              <span>official email address</span>
            </h1>
            <ul>
              <li className='text-[1.2vmax] font-medium text-neutral-800 list-disc ml-4 hover:text-blue-700'>
                <a
                  href='mailto:hello@rabinsphotography.com
                ;'
                >
                  hello@rabinsphotography.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
