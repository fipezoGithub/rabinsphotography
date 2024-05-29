import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";

const berkshireSwash = Berkshire_Swash({ subsets: ["latin"], weight: "400" });

async function getFilmById(id) {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/film/${id}`,
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

export default async function FilmId({ params }) {
  const filmData = await getFilmById(params.filmId);

  return (
    <>
      <Navbar />
      <header className='fixed top-0 left-0'>
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${filmData.cover}`}
          alt='event cover'
          width={1200}
          height={650}
          className='w-screen max-h-screen object-cover'
        />
      </header>
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center relative mt-[85vmin]'>
        <section className='flex flex-col items-center gap-2 relative'>
          <h1
            className={
              berkshireSwash.className +
              " text-[2.7vmax] font-bold text-fuchsia-900 capitalize"
            }
          >
            {filmData.title}
          </h1>
          <p className='text-[1.7vmax] max-w-[75vmax] text-center'>
            Make your best moment more special through Best {filmData.title}{" "}
            Videography by Rabin&apos;s Photography. We have expertise with a
            highly professional {filmData.title} Photography & Videography team
            in all over India.
          </p>
        </section>
        <section className='flex items-center gap-[1.5vmax] flex-wrap justify-center my-6'>
          {filmData.videolinks?.map((item, i) => (
            <iframe
              key={i}
              className='max-w-[30vmax] min-w-[30vmax] max-h-[50vmin] min-h-[40vmin] border-0  rounded-lg shadow-lg'
              src={`https://www.youtube.com/embed/${item.replace(
                "https://youtu.be/",
                ""
              )}&amp;controls=0`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}
