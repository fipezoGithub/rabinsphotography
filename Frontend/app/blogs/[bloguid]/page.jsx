import BlogContent from "@/components/BlogContent";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import Image from "next/image";

async function getBlogById(id) {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/blogs/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogUid({ params }) {
  const pageData = await getBlogById(params.bloguid);
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center px-4 sm:px-0'>
        <header className='mt-16 py-16 flex flex-col items-center mx-8 gap-6 max-w-[60vmax]'>
          <h1 className='text-[2vmax] font-bold text-center text-neutral-800'>
            {pageData.title}
          </h1>
          <p className='text-[1.4vmax] font-medium text-neutral-800 text-center'>
            {pageData.subHeading}
          </p>
        </header>
        <section className='flex flex-col items-center gap-6'>
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URI}/images/${pageData.blogCover}`}
            alt='blog-cover'
            width={1200}
            height={720}
            className='max-w-[50vmax] sm:max-w-[60vmax]'
          />
          <BlogContent data={pageData.blogsData} />
          <p className='text-[1vmax] font-semibold tracking-widest text-[#323131] self-end'>
            {new Date(`${pageData.createdAt}`).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
