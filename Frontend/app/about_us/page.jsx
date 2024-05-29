import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import { Berkshire_Swash } from "next/font/google";
import Image from "next/image";

const berkshireSwash = Berkshire_Swash({ subsets: ["latin"], weight: "400" });

export default async function AboutUs() {
  const backTeam = [
    {
      img: "/tumpa-biswas.jpeg",
      name: "Tumpa Biswas",
      designation: "Relationship Manager",
    },
    {
      img: "/rik-mondal.jpeg",
      name: "Rik Mondal",
      designation: "Video Editor",
    },
    {
      img: "/moumita-kundu.jpeg",
      name: "Moumita Kundu",
      designation: "Graphics Designer",
    },
    {
      img: "/pritam-saha.jpeg",
      name: "Pritam Saha",
      designation: "Video Editor",
    },
    {
      img: "/aniket-saha.jpeg",
      name: "Aniket saha",
      designation: "Web Developer",
    },
  ];
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-16 py-16 flex flex-col items-center mx-8 gap-6'>
          <h1 className='text-[2.5vmax] font-semibold py-2 montserrat relative text-neutral-800 text-center sm:text-left'>
            Aesthetic Photographers at Rabin&apos;s Photography
          </h1>
          <p className='py-2 text-[1.4vmax] w-[50vmax] text-center text-neutral-800'>
            We, at Rabin&apos;s Photography, believe in turning the most awaited
            day of your life into the most memorable day of your lifetime. As
            one of the best wedding photography company in India, we understand
            how emotional every event is for you and all your close ones, so we
            always give the best shot in our services to you to make your album
            shine forever.
          </p>
          <Image
            src='/about-us-team.jpg'
            alt='team'
            width={800}
            height={400}
            className='w-[75vmax] h-[38vmax] object-cover py-2'
          />
        </header>
        <section className='flex flex-col sm:items-center gap-6 mx-8 sm:py-16'>
          <h1 className='text-[2vmax] font-bold text-center sm:w-[55vmax]'>
            We treat each and every one of our clients as our own and we
            celebrate each and every events with the clients, their friends
            &amp; family members.
          </h1>
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <div className='flex flex-col items-start gap-6'>
              <h2 className='text-[2vmax] capitalize font-semibold'>
                why rabin&apos;s photography
              </h2>
              <p className='text-[1.4vmax] font-medium text-neutral-700 w-[50vmax]'>
                We offer the Best creative wedding photography, Best Pre wedding
                photography, Best Couple shoots in Wedding, Best Maternity
                shoots, Best Pre-wedding cinematic video, Best Wedding Cinematic
                videos, Best Cinematic wedding films, Best Candid wedding
                photography, Best Bridal portraits, Best storytelling wedding
                video, Best Aesthetic post wedding photography, Best Corporate
                shoots, Best Portfolio shoots and much more.
              </p>
              <button
                type='button'
                className='text-[1.4vmax] capitalize rounded-3xl bg-blue-600 text-neutral-100 px-4 py-2'
              >
                explore more
              </button>
            </div>
            <video
              src='/about_us_video.mp4'
              className='sm:block hidden w-[30vmax] h-[30vmax]'
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
        <section className='flex flex-col items-center gap-6 mx-8 py-16'>
          <h1 className='text-[2vmax] font-bold text-center w-[55vmax] my-6'>
            The team behind Rabin&apos;s Photography, without them it&apos;s not
            possible to reach where we are right now.
          </h1>
          <div className='flex items-center gap-[5vmax] relative max-w-[75vmax]'>
            <Image
              src='/Rabin-ghosh-seo.jpg'
              width={450}
              height={150}
              alt='Rabin Ghosh CEO'
              className='w-[30vmax]'
            />
            <div className='flex flex-col items-center absolute top-3/4 bg-[linear-gradient(90deg,_rgba(195,83,230,1)_35%,_rgba(255,255,255,0)_78%)] text-white px-2 py-1'>
              <h1 className='text-[1.5vmax] capitalize font-semibold'>
                mr. rabin ghosh
              </h1>
              <h3 className='text-[1.2vmax] font-medium'>Founder &amp; CEO</h3>
            </div>
            <div>
              <q className={berkshireSwash.className + " text-[1.4vmax]"}>
                I believe in storytelling with successful client review, which
                preserves every piece of memory in a event. Photography is an
                art of observation. It&apos;s about finding something
                interesting an ordinary place. We use the latest equipment and
                techniques to ensure that every shot is perfect and that every
                photo tells a story
              </q>{" "}
              -{" "}
              <span className='text-[1.2vmax] font-medium tracking-wide'>
                {" "}
                Rabin Ghosh
              </span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-[2vmax] font-bold text-center w-[55vmax] my-6'>
              Meet our Creative Team
            </h1>
            <div className='flex items-center justify-evenly gap-16 flex-wrap max-w-[75vmax] my-6 py-4'>
              <div className='flex flex-col items-center gap-2 group'>
                <Image
                  src='/Rabin-ghosh-seo.jpg'
                  width={450}
                  height={150}
                  alt='Rabin Ghosh CEO'
                  className='w-[15vmax] h-[15vmax] object-cover rounded-full grayscale transition-all duration-500 group-hover:grayscale-0'
                />
                <div className='flex flex-col items-center group-hover:text-purple-800 transition-all duration-500'>
                  <h1 className='text-[2vmax] capitalize font-semibold'>
                    mr. rabin ghosh
                  </h1>
                  <h3 className='text-[1.2vmax] font-medium'>
                    Founder &amp; CEO
                  </h3>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2 group'>
                <Image
                  src='/Rabin-ghosh-seo.jpg'
                  width={450}
                  height={150}
                  alt='Rabin Ghosh CEO'
                  className='w-[15vmax] h-[15vmax] object-cover rounded-full grayscale transition-all duration-500 group-hover:grayscale-0'
                />
                <div className='flex flex-col items-center group-hover:text-purple-800 transition-all duration-500'>
                  <h1 className='text-[2vmax] capitalize font-semibold'>
                    mr. rabin ghosh
                  </h1>
                  <h3 className='text-[1.2vmax] font-medium'>
                    Founder &amp; CEO
                  </h3>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2 group'>
                <Image
                  src='/Rabin-ghosh-seo.jpg'
                  width={450}
                  height={150}
                  alt='Rabin Ghosh CEO'
                  className='w-[15vmax] h-[15vmax] object-cover rounded-full grayscale transition-all duration-500 group-hover:grayscale-0'
                />
                <div className='flex flex-col items-center group-hover:text-purple-800 transition-all duration-500'>
                  <h1 className='text-[2vmax] capitalize font-semibold'>
                    mr. rabin ghosh
                  </h1>
                  <h3 className='text-[1.2vmax] font-medium'>
                    Founder &amp; CEO
                  </h3>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2 group'>
                <Image
                  src='/Rabin-ghosh-seo.jpg'
                  width={450}
                  height={150}
                  alt='Rabin Ghosh CEO'
                  className='w-[15vmax] h-[15vmax] object-cover rounded-full grayscale transition-all duration-500 group-hover:grayscale-0'
                />
                <div className='flex flex-col items-center group-hover:text-purple-800 transition-all duration-500'>
                  <h1 className='text-[2vmax] capitalize font-semibold'>
                    mr. rabin ghosh
                  </h1>
                  <h3 className='text-[1.2vmax] font-medium'>
                    Founder &amp; CEO
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-[2vmax] font-bold text-center w-[55vmax] my-6'>
              Meet our Backbone
            </h1>
            <div className='flex items-center justify-evenly gap-16 flex-wrap max-w-[75vmax] my-6 py-4'>
              {backTeam.map((person, index) => (
                <div
                  className='flex flex-col items-center gap-2 group'
                  key={index}
                >
                  <Image
                    src={person.img}
                    width={450}
                    height={150}
                    alt='Rabin Ghosh CEO'
                    className='w-[15vmax] h-[15vmax] object-cover object-top rounded-full grayscale transition-all duration-500 group-hover:grayscale-0'
                  />
                  <div className='flex flex-col items-center group-hover:text-purple-800 transition-all duration-500'>
                    <h1 className='text-[2vmax] capitalize font-semibold'>
                      {person.name}
                    </h1>
                    <h3 className='text-[1.2vmax] font-medium'>
                      {person.designation}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
