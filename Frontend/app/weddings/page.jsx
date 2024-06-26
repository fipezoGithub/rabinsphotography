import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import WeddingCard from "@/components/WeddingCard";
import WeddingFilter from "@/components/WeddingFilter";

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
export default async function Weddings() {
  const weddings = await getAllWeddings();
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo imgSrc={"Wedding_banner.jpg"} />
        <WeddingFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {weddings?.map((item, index) => (
            <WeddingCard key={index} wedding={item} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
