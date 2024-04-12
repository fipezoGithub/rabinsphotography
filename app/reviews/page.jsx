import Footer from "@/components/Footer";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default async function Reviews() {
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <section className='flex flex-col items-center gap-4 max-w-[75vmax] my-6'>
          <h1 className='text-[2.5vmax] font-bold'>
            Stories of Our Lovely Clients
          </h1>
          <p className='text-[1.6vmax] font-medium text-center'>
            We make sure that clients at Rabin&apos;s Photography are completely
            satisfied. Read the Wedding Photography Testimonials and Reviews
            from our Clients.
          </p>
          <q className='text-[1.8vmax] font-semibold text-center'>
            Thank you, everyone, for your feedback and reviews
          </q>
        </section>
        <section className='my-6 flex flex-wrap items-center justify-center gap-4 max-w-[70vmax]'>
          <Link
            href='https://www.google.com/search?q=rabinsphotography&rlz=1C1ONGR_enIN1042IN1042&oq=rabinsphotography&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBNIBBzM1OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x3a0277b182fd5f73:0xc2d04a221fb9ff27,3,,,,'
            target='_blank'
            className='flex flex-col items-center justify-center gap-2 bg-white min-w-[15vmax] py-4 rounded-2xl shadow-lg min-h-[20vh]'
          >
            <Image
              src='/google-logo.png'
              alt='google'
              width={400}
              height={150}
              className='w-[12vmax]'
            />
            <div className='flex items-center justify-center text-amber-400 text-[1.7vmax]'>
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
          </Link>
          <Link
            href='https://www.facebook.com/RabinsPhotography/reviews'
            target='_blank'
            className='flex flex-col items-center justify-center gap-4 bg-white min-w-[15vmax] py-4 rounded-2xl shadow-lg min-h-[20vh]'
          >
            <Image
              src='/facebook-logo.png'
              alt='facebook'
              width={400}
              height={150}
              className='w-[12vmax]'
            />
            <div className='flex items-center justify-center text-amber-400 text-[1.7vmax]'>
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
          </Link>
          <Link
            href='https://www.wedmegood.com/profile/Rabins-Photography-169825/reviews'
            target='_blank'
            className='flex flex-col items-center justify-center gap-4 bg-white min-w-[15vmax] py-4 rounded-2xl shadow-lg min-h-[20vh]'
          >
            <Image
              src='/wedmegood-logo.png'
              alt='wedmegood'
              width={400}
              height={150}
              className='w-[12vmax]'
            />
            <div className='flex items-center justify-center text-amber-400 text-[1.7vmax]'>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </Link>
          <Link
            href='https://www.justdial.com/Kolkata/Rabins-Photography-Near-Dakshindari-Busstop-Near-Dakshin-Bari-Khalpara-Ultadanga-Main-Road/033PXX33-XX33-171011120502-W3I7_BZDET/writereview?city=Kolkata&area=Ultadanga+Main+Road&fid=&prevRating=0&company_name=Rabin%27s+Photography&nav=1&tapToRate=1'
            target='_blank'
            className='flex flex-col items-center justify-center gap-4 bg-white min-w-[15vmax] py-4 rounded-2xl shadow-lg min-h-[20vh]'
          >
            <Image
              src='/justdial-logo.png'
              alt='justdial'
              width={400}
              height={150}
              className='w-[12vmax]'
            />
            <div className='flex items-center justify-center text-amber-400 text-[1.7vmax]'>
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
          </Link>
          <Link
            href='https://www.weddingwire.in/wedding-photographers/rabins-photography--e178209'
            target='_blank'
            className='flex flex-col items-center justify-center gap-4 bg-white min-w-[15vmax] py-4 rounded-2xl shadow-lg min-h-[20vh]'
          >
            <Image
              src='/wedingwire-logo.png'
              alt='wedminwear'
              width={400}
              height={150}
              className='w-[12vmax]'
            />
            <div className='flex items-center justify-center text-amber-400 text-[1.7vmax]'>
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
