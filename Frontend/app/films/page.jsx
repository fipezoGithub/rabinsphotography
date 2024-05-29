import FilmsCard from "@/components/FilmsCard";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";

async function getAllFilms() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/film`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function Films() {
  const films = await getAllFilms();
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo imgSrc={"film_banner.jpg"} />
        <section className='flex flex-col items-center gap-4 mx-8 py-16'>
          <h1 className='text-[2vmax] font-bold text-center text-neutral-800'>
            Some of Best Cinematography by Rabin&apos;s Photography
          </h1>
          <p className='text-[1.4vmax] font-medium w-[50vmax] text-center text-neutral-800'>
            The most stunning & magical yet colorful films captured by
            experienced cimematographers of Rabin&apos;s Photography, a highly
            professional Photography & Videography team in Kolkata.
          </p>
        </section>
        <section className='flex items-center justify-center flex-wrap gap-4 sm:mx-8 mx-0 m-4'>
          {films?.map((item, index) => (
            <FilmsCard key={index} film={item} />
          ))}
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
