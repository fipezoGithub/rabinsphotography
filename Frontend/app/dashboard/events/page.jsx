import EventDashBoardComponent from "@/components/EventDashBoardComponent";

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

export default async function EventDashboard() {
  const events = await getAllEvents();
  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Rabin&apos;s Photography Events Dashboard
      </h1>
      <EventDashBoardComponent events={events} />
    </div>
  );
}
