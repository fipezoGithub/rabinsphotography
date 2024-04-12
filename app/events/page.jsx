import EventCard from "@/components/EventCard";
import EventsFilter from "@/components/EventsFilter";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";

export default async function Events() {
  const events = Array.from({ length: 10 });

  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <EventsFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {events.map((_, index) => (
            <EventCard key={index} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
