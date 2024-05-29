import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioFilter from "@/components/PortfolioFilter";

async function getAllPortfolios() {
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

export default async function Portfolios() {
  const portfolios = await getAllPortfolios();
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <PortfolioFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {portfolios &&
            portfolios.map((item, index) => (
              <PortfolioCard key={index} portfolio={item} />
            ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
