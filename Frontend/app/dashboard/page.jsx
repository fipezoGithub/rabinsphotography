
import { IoAdd } from "react-icons/io5";
import { SiMicrosoft } from "react-icons/si";

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

export default async function Dashboard() {
  const weddings = await getAllWeddings();
  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Welcome to Rabin&apos;s Photography Dashboard
      </h1>
      <div className='flex flex-col w-full gap-[4vmin]'>
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
          <li className='me-2'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group text-[1.3vmax]'
            >
              <SiMicrosoft className='me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
              All Weddings
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group text-[1.3vmax]'
            >
              <IoAdd className='me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
              Add new Wedding
            </a>
          </li>
        </ul>
        <div className='relative overflow-x-auto min-w-[75vmax] shadow-md sm:rounded-lg self-center'>
          <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full'>
            <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr className='text-[2vmin]'>
                <th scope='col' className='px-6 py-3'>
                  husband
                </th>
                <th scope='col' className='px-6 py-3'>
                  wife
                </th>
                <th scope='col' className='px-6 py-3'>
                  venue name
                </th>
                <th scope='col' className='px-6 py-3'>
                  location
                </th>
                <th scope='col' className='px-6 py-3'>
                  type
                </th>
                <th scope='col' className='px-6 py-3'>
                  images
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {weddings?.map((item) => (
                <tr
                  key={item._id}
                  className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-[2vmin]'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {item.husband}
                  </th>
                  <td className='px-6 py-4'>{item.wife}</td>
                  <td className='px-6 py-4'>{item.venuename}</td>
                  <td className='px-6 py-4'>{item.location}</td>
                  <td className='px-6 py-4'>
                    {item.weddingtype?.split("_").join(" ")}
                  </td>
                  <td className='px-6 py-4'>{item.images.length}</td>
                  <td className='px-6 py-4'>
                    <a
                      href='#'
                      className='font-medium text-red-600 hover:underline'
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
