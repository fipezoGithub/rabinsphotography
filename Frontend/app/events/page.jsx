import EventCard from "@/components/EventCard";
import EventsFilter from "@/components/EventsFilter";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";

async function getAllEvents() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/event`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function Events() {
  const events = await getAllEvents();

  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <EventsFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {events?.map((item, index) => (
            <EventCard key={index} event={item} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
