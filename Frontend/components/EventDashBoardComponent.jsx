"use client";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { SiMicrosoft } from "react-icons/si";

const EventDashBoardComponent = ({ events }) => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className='flex flex-col w-full gap-[4vmin]'>
      <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        <li className='me-2'>
          <button
            onClick={() => setIsAdding(false)}
            aria-current='page'
            className='inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group text-[1.3vmax]'
          >
            <SiMicrosoft className='me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
            All Events
          </button>
        </li>
        <li className='me-2'>
          <button
            onClick={() => setIsAdding(true)}
            aria-current='page'
            className='inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group text-[1.3vmax]'
          >
            <IoAdd className='me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
            Add new Events
          </button>
        </li>
      </ul>
      {!isAdding ? (
        <div className='relative overflow-x-auto min-w-[75vmax] shadow-md sm:rounded-lg self-center'>
          <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full'>
            <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr className='text-[2vmin]'>
                <th scope='col' className='px-6 py-3'>
                  title
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
              {events?.map((item) => (
                <tr
                  key={item._id}
                  className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-[2vmin]'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {item.title}
                  </th>
                  <td className='px-6 py-4'>{item.venuename}</td>
                  <td className='px-6 py-4'>{item.location}</td>
                  <td className='px-6 py-4'>
                    {item.eventtype?.split("_").join(" ")}
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
      ) : (
        <div className='relative overflow-x-auto min-w-[75vmax] self-center'>
          <form className='max-w-2xl mx-auto flex flex-col'>
            <div className='mb-5'>
              <label
                htmlFor='title'
                className='block mb-2 text-[1.2vmax] font-medium text-gray-900 dark:text-white'
              >
                Title
              </label>
              <input
                type='text'
                id='title'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                htmlhtmlhtmlFor='venuename'
                className='block mb-2 text-[1.2vmax] font-medium text-gray-900 dark:text-white'
              >
                Venue name
              </label>
              <input
                type='text'
                id='venuename'
                placeholder='kolkata'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                htmlhtmlhtmlFor='location'
                className='block mb-2 text-[1.2vmax] font-medium text-gray-900 dark:text-white'
              >
                Location
              </label>
              <input
                type='text'
                id='location'
                placeholder='kolkata'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                htmlhtmlFor='countries'
                className='block mb-2 text-[1.2vmax] font-medium text-gray-900 dark:text-white'
              >
                Event Type
              </label>
              <select
                id='countries'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose event type</option>
                <option value='Birthday_parties'>Birthday Parties</option>
                <option value='Anniversary'>Bengali Wedding</option>
                <option value='Rice_ceremony'>Rice Ceremony</option>
                <option value='Baby_shower'>Baby Shower</option>
                <option value='Upanayana'>Upanayana</option>
                <option value='Mundan'> Mundan</option>
                <option value='Engagement'>Engagement</option>
                <option value='Get_together'>Get - Together</option>
                <option value='Homecoming'>Homecoming</option>
              </select>
            </div>
            <div className='mb-5'>
              <label
                className='block mb-2 text-[1.2vmax] font-medium text-gray-900 dark:text-white'
                htmlFor='multiple_files'
              >
                Upload multiple files
              </label>
              <input
                className='block w-full text-[1.2vmax] text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                id='multiple_files'
                type='file'
                multiple
              />
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.2vmax] w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-[25vmax] self-center'
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventDashBoardComponent;
