"use client";
import React from "react";

const ContactDashBoardComponent = ({ contact }) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getUTCFullYear();

    // Adding 'th', 'st', 'nd', 'rd' to the day
    const nth = (day) => {
      if (day > 3 && day < 21) return "th"; // because 11th, 12th, 13th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${nth(day)} ${month}, ${year}`;
  };

  return (
    <div className='flex flex-col w-full gap-[4vmin]'>
      <div className='relative overflow-x-auto min-w-[75vmax] shadow-md sm:rounded-lg self-center'>
        <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-[2vmin]'>
              <th scope='col' className='px-6 py-3'>
                name
              </th>
              <th scope='col' className='px-6 py-3'>
                email
              </th>
              <th scope='col' className='px-6 py-3'>
                phone
              </th>
              <th scope='col' className='px-6 py-3'>
                type
              </th>
              <th scope='col' className='px-6 py-3'>
                date
              </th>
              <th scope='col' className='px-6 py-3'>
                location
              </th>
              <th scope='col' className='px-6 py-3'>
                description
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {contact?.map((item) => (
              <tr
                key={item._id}
                className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-[2vmin]'
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {item.name}
                </th>
                <td className='px-6 py-4'>{item.email}</td>
                <td className='px-6 py-4'>{item.phone}</td>
                <td className='px-6 py-4'>
                  {item.shoottype?.split("_").join(" ")}
                </td>
                <td className='px-6 py-4'>{formatDate(item.eventdate)}</td>
                <td className='px-6 py-4'>{item.location}</td>
                <td className='px-6 py-4 truncate'>{item.description}</td>
                <td className='px-6 py-4'>
                  <a
                    href='#'
                    className='font-medium text-red-600 hover:underline capitalize'
                  >
                    mark complete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDashBoardComponent;
