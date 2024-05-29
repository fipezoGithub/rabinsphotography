import BabyAndMaternityCard from "@/components/BabyAndMaternityCard";
import BabyAndMaternityFilter from "@/components/BabyAndMaternityFilter";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";

async function getAllBabyAndMaternity() {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/baby-and-maternity`,
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

export default async function BabyAndMaternity() {
  const babyAndMaternity = await getAllBabyAndMaternity();
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo imgSrc={"Maternity_banner.jpg"} />
        <BabyAndMaternityFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {babyAndMaternity?.map((item, index) => (
            <BabyAndMaternityCard key={index} event={item} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
