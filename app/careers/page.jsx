import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import Navbar from "@/components/Navbar";
import CareerForm from "@/components/CareerForm";

export default async function JoinUs() {
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <section className='flex flex-col items-center justify-center gap-6 mx-8 my-5'>
          <h1 className='text-[2vmax] font-bold text-slate-800'>
            Join with Rabin&apos;s Photography as a member of our family
          </h1>
          <p className='text-[1.3vmax] font-medium text-center text-slate-800'>
            Register yourself in the best Photography company near you in
            Kolkata.You will be working closing with one of the best wedding
            photographers in India. We are a team of photographers, filmers, and
            cinematographers, video editors, photo editors working across India
            &amp; the globe. If you have this keen interest and passion, explore
            your love for photography more with us and be recognized!
          </p>
          <CareerForm />
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
