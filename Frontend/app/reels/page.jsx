import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import ReelsWithThumb from "@/components/ReelsWithThumb";

async function getAllReels() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/reel`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
export default async function Reels() {
  const reelsData = await getAllReels();

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
          {reelsData?.map((item, index) => (
            <ReelsWithThumb item={item} key={index} />
          ))}
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
