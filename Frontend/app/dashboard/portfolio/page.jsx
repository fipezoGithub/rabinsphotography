import PortfolioDashBoardComponent from "@/components/PortfolioDashboardComponent";

async function getAllPortfolio() {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/portfolio`,
      {
        cache: "no-store",
      }
    );
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function PortfolioDashboard() {
  const portfolios = await getAllPortfolio();
  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Rabin&apos;s Photography Portfolio Dashboard
      </h1>
      <PortfolioDashBoardComponent portfolio={portfolios} />
    </div>
  );
}
