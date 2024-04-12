import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import WeddingCard from "@/components/WeddingCard";
import WeddingFilter from "@/components/WeddingFilter";

export default async function Weddings() {
  const weddings = Array.from({ length: 10 });
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <WeddingFilter />
        <div className='my-8 flex items-center justify-center gap-4 flex-wrap'>
          {weddings.map((_, index) => (
            <WeddingCard key={index} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
