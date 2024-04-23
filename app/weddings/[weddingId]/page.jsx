import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Berkshire_Swash } from "next/font/google";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import ImageViewerComponent from "@/components/ImageViewer";

const berkshireSwash = Berkshire_Swash({ subsets: ["latin"], weight: "400" });

async function getWeddingById(id) {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/weddings/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
export default async function WeddingId({ params }) {
  // const images = [
  //   "/_DSC4885.jpg",
  //   "/about-us-team.jpg",
  //   "/contact.jpeg",
  //   "/header-bg.jpg",
  //   "/service.jpeg",
  //   "/team_player.jpg",
  //   "/45.jpg",
  // ];
  const weddingDetails = await getWeddingById(params.weddingId);
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-9 py-4 flex flex-col items-center gap-6'>
          <Image
            src={`/api/images/${weddingDetails.images[0]}`}
            alt='wedding cover'
            width={1200}
            height={650}
            className='w-screen max-h-[70vh] object-cover'
          />
        </header>
        <section className='flex flex-col items-center gap-4'>
          <h1
            className={
              berkshireSwash.className +
              " text-[2.7vmax] font-bold text-fuchsia-900"
            }
          >
            {weddingDetails.husband} x {weddingDetails.wife}
          </h1>
          <div className='flex items-center justify-center gap-8'>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <FaBuilding color='#ff4700' />
              <p className='capitalize text-neutral-800 font-semibold'>
                {weddingDetails.venuename}
              </p>
            </div>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <FaLocationDot color='#e60000' />
              <p className='capitalize text-neutral-800 font-semibold'>
                {weddingDetails.location}
              </p>
            </div>
            <div className='flex items-center gap-2 text-[1.5vw]'>
              <AiFillAppstore color='#0000FF' />
              <p className='capitalize text-neutral-800 font-semibold'>
                {weddingDetails.weddingtype.split("_").join(" ")}
              </p>
            </div>
          </div>
        </section>
        <section className='flex items-center gap-4 flex-wrap justify-center my-6'>
          {weddingDetails.images.map((image, i) => (
            <div className='overflow-hidden' key={i}>
              <ImageViewerComponent
                image={image}
                index={i}
                data={weddingDetails.images}
                imagePrefix={`/wedding/${weddingDetails.husband.toLowerCase()}-${weddingDetails.wife.toLowerCase()}`}
              />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
