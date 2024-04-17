import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

async function getAllBlogs() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/blogs`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function Blogs() {
  const blogsData = await getAllBlogs();
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-16 py-8 sm:py-16 flex flex-col items-center mx-8 gap-6'>
          <h1 className='text-[2.5vmax] font-semibold py-2 montserrat relative text-neutral-800 capitalize text-center sm:text-left'>
            Creativities &amp; blogs from Rabin&apos;s Photography
          </h1>
          <p className='py-2 text-[1.4vmax] sm:w-[50vmax] text-center text-neutral-800'>
            Read the photography blog now for exclusive behind-the-scenes
            stories, gear reviews, tips, tutorials and more!
          </p>
        </header>
        <section className='flex items-start justify-center gap-6 my-8 flex-wrap'>
          {blogsData.map((item, index) => (
            <BlogCard key={index} blog={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
