import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import ReelsWithThumb from "@/components/ReelsWithThumb";
import Image from "next/image";

export default async function Reels() {
  const reelsData = [
    {
      uri: "https://www.instagram.com/reel/C4s6S-UvLtB/",
      videoSrc: "/reels-olivia-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C32DX-dvtLG/",
      videoSrc: "/reels-shilpa-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C3qGcWBPyD0/",
      videoSrc: "/reels-jhoom-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C3aQglUvTT3/",
      videoSrc: "/reels-gleem-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C2KppCPPKfs/",
      videoSrc: "/reels-olivia-zebra-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C5hsYqNvMPQ/",
      videoSrc: "/reels-rahuldevbose-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C1WP38CvO73/",
      videoSrc: "/reels-rimjhim-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C1f9gsRPZmF/",
      videoSrc: "/reels-yellow-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/C3zefzpP04A/",
      videoSrc: "/reels-christian-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/CzjiOmaNWsc/",
      videoSrc: "/reels-srijita-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/CvXCo8GtGXX/",
      videoSrc: "/reels-sushi-thumb.mp4",
    },
    {
      uri: "https://www.instagram.com/reel/Co90AyZg9L3/",
      videoSrc: "/reels-juita-thumb.mp4",
    },
  ];

  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <section className='flex flex-col items-center gap-4 mx-8 py-16'>
          <h1 className='text-[2vmax] font-bold text-center'>
            Capturing Moments by Rabin&apos;s Photography
          </h1>
          <p className='text-[1.4vmax] font-medium text-neutral-700 w-[50vmax] text-center'>
            The most stunning & magical yet colorful Moments captured by
            Rabin&apos;s Photography, a highly professional Photography &
            Videography team in Kolkata.
          </p>
        </section>
        <section className='flex items-center gap-8 flex-wrap justify-center my-4 mx-8'>
          {reelsData.map((item, index) => (
            <ReelsWithThumb item={item} key={index} />
          ))}
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
