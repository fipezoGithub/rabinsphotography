import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeaderVideoLogo from "@/components/HeaderVideoLogo";
import ImageViewerComponent from "@/components/ImageViewer";
import Navbar from "@/components/Navbar";

export default async function Gallery() {
  const images = [
    "/_DSC4885.jpg",
    "/about-us-team.jpg",
    "/contact.jpeg",
    "/header-bg.jpg",
    "/service.jpeg",
    "/team_player.jpg","/45.jpg"
  ];
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <HeaderVideoLogo />
        <section className='flex flex-col items-center gap-4 mx-8 py-16'>
          <h1 className='text-[2vmax] font-bold text-center'>
            Capturing Moments by Rabin&apos;s Photography
          </h1>
          <p className='text-[1.4vmax] font-medium text-neutral-700 w-[50vmax] text-center'>
            The most stunning & magical yet colorful Moments captured by
            Rabin&apos;s Photography, a highly professional Photography &amp;
            Videography team in Kolkata.
          </p>
        </section>
        <section className='flex items-center gap-4 flex-wrap justify-center my-6'>
          {images.map((image, i) => (
            <div className='overflow-hidden' key={i}>
              <ImageViewerComponent image={image} index={i} data={images} />
            </div>
          ))}
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
