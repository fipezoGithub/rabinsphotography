import WeddingDashBoardComponent from "@/components/WeddingDashBoardComponent";


async function getAllWeddings() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/wedding`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function DashWedding() {
  const weddings = await getAllWeddings();

  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Welcome to Rabin&apos;s Photography Dashboard
      </h1>
      {<WeddingDashBoardComponent weddings={weddings} />}
    </div>
  );
}
