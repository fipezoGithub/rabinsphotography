import Image from "next/image";

export default function Loading() {
  return (
    <main className='bg-black flex min-h-svh items-center justify-center'>
      <Image
        src='/loading.gif'
        alt='loading'
        width={400}
        height={400}
        unoptimized
      />
    </main>
  );
}
