import Footer from "@/components/Footer";
import ImageViewerComponent from "@/components/ImageViewer";
import Navbar from "@/components/Navbar";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";
import { AiFillAppstore } from "react-icons/ai";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";

const berkshireSwash = Berkshire_Swash({ subsets: ["latin"], weight: "400" });

export default async function PortfolioId() {
  const images = [
    "/_DSC4885.jpg",
    "/about-us-team.jpg",
    "/contact.jpeg",
    "/header-bg.jpg",
    "/service.jpeg",
    "/team_player.jpg","/45.jpg"
  ];
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-9 py-4 flex flex-col items-center gap-6'>
          <Image
            src='/header-bg.jpg'
            alt='event cover'
            width={1200}
            height={650}
            className='w-screen max-h-[70vh] object-cover'
          />
        </header>
        <section className='flex flex-col items-center gap-4'>
          <h1
            className={
              berkshireSwash.className +
              " text-[2.7vmax] font-bold text-fuchsia-900 capitalize"
            }
          >
            portfolio title
          </h1>
          <div className='flex items-center justify-center gap-8'>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <FaBuilding color='#ff4700' />
              <p className='capitalize text-neutral-800 font-semibold'>
                venue name
              </p>
            </div>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <FaLocationDot color='#e60000' />
              <p className='capitalize text-neutral-800 font-semibold'>
                location
              </p>
            </div>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <AiFillAppstore color='#0000FF' />
              <p className='capitalize text-neutral-800 font-semibold'>
                event type
              </p>
            </div>
          </div>
        </section>
        <section className='flex items-center gap-4 flex-wrap justify-center my-6'>
          {images.map((image, i) => (
            <div className='overflow-hidden' key={i}>
              <ImageViewerComponent image={image} index={i} data={images} />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
