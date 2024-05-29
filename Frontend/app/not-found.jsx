import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='min-h-[85vmin] flex items-center justify-center mt-[4vmax]'>
        <div className='flex flex-col items-center justify-center gap-[1.8vmin] my-[2vmin]'>
          <Image
            src='/404-cover.png'
            alt='not-found'
            width={500}
            height={350}
            className='mt-[3vmin]'
          />
          <h1 className='text-neutral-800 text-[1.7vmax]'>
            This page is in under <span className='uppercase'>development</span>
            . Please stay tune.
          </h1>
          <Link
            href='/'
            className='bg-blue-600 py-[1.3vmin] min-w-[15vmax] text-center font-medium text-[1.5vmax] text-neutral-100 rounded-lg'
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
