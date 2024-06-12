import Image from "next/image";
import Link from "next/link";

async function getDashboardData() {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/dashboard`,
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

export default async function Dashboard() {
  const dashboardData = await getDashboardData();
  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Welcome to Rabin&apos;s Photography Dashboard
      </h1>
      <div className='flex flex-grow justify-evenly flex-wrap gap-[2vmin] h-[calc(80vh-4rem)]'>
        <div className='border px-[3vmin] py-[1.5vmin] border-neutral-400 rounded-xl shadow-md flex items-start gap-[5vmin] bg-gradient-to-br from-[#9600ff] to-[#aebaf8] max-w-[35vw]'>
          <div className='flex flex-col gap-[2.5vmin]'>
            <p className='text-[3.5vmin] font-semibold text-slate-100'>
              You have {dashboardData?.contact} pending contact requests
            </p>
            <Link
              href='/dashboard/contact'
              className='capitalize text-[2.2vmin] text-slate-100 flex items-end gap-2'
            >
              <span>check now</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 12H5m14 0-4 4m4-4-4-4'
                />
              </svg>
            </Link>
          </div>
          <div>
            <Image
              src='/dashboard-request.png'
              alt='contact'
              width={600}
              height={450}
              className='max-w-[15vmax]'
            />
          </div>
        </div>
        <div className='border px-[3vmin] py-[1.5vmin] border-neutral-400 rounded-xl shadow-md flex items-start gap-[5vmin] bg-gradient-to-br from-[#9600ff] to-[#aebaf8] max-w-[35vw]'>
          <div className='flex flex-col gap-[2.5vmin]'>
            <p className='text-[3.5vmin] font-semibold text-slate-100'>
              You have added {dashboardData?.wedding} weddings
            </p>
            <Link
              href='/dashboard/wedding'
              className='capitalize text-[2.2vmin] text-slate-100 flex items-end gap-2'
            >
              <span>check now</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 12H5m14 0-4 4m4-4-4-4'
                />
              </svg>
            </Link>
          </div>
          <div>
            <Image
              src='/dashboard-request.png'
              alt='contact'
              width={600}
              height={450}
              className='max-w-[15vmax]'
            />
          </div>
        </div>
        <div className='border px-[3vmin] py-[1.5vmin] border-neutral-400 rounded-xl shadow-md flex items-start gap-[5vmin] bg-gradient-to-br from-[#9600ff] to-[#aebaf8] max-w-[35vw]'>
          <div className='flex flex-col gap-[2.5vmin]'>
            <p className='text-[3.5vmin] font-semibold text-slate-100'>
              You have added {dashboardData?.event} events
            </p>
            <Link
              href='/dashboard/events'
              className='capitalize text-[2.2vmin] text-slate-100 flex items-end gap-2'
            >
              <span>check now</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 12H5m14 0-4 4m4-4-4-4'
                />
              </svg>
            </Link>
          </div>
          <div>
            <Image
              src='/dashboard-request.png'
              alt='contact'
              width={600}
              height={450}
              className='max-w-[15vmax]'
            />
          </div>
        </div>
        <div className='border px-[3vmin] py-[1.5vmin] border-neutral-400 rounded-xl shadow-md flex items-start gap-[5vmin] bg-gradient-to-br from-[#9600ff] to-[#aebaf8] max-w-[35vw]'>
          <div className='flex flex-col gap-[2.5vmin]'>
            <p className='text-[3.5vmin] font-semibold text-slate-100'>
              You have added {dashboardData?.portfolio} portfolios
            </p>
            <Link
              href='/dashboard/portfolio'
              className='capitalize text-[2.2vmin] text-slate-100 flex items-end gap-2'
            >
              <span>check now</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 12H5m14 0-4 4m4-4-4-4'
                />
              </svg>
            </Link>
          </div>
          <div>
            <Image
              src='/dashboard-request.png'
              alt='contact'
              width={600}
              height={450}
              className='max-w-[15vmax]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
