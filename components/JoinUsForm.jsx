"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { HiAtSymbol } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

const JoinUsForm = () => {
  return (
    <form className='flex flex-col gap-6 items-stretch mx-auto bg-white bg-opacity-40 py-8 sm:min-w-[30vmax] sm:max-w-[45vmax] px-8 rounded-xl shadow-lg'>
      <h1 className='text-center font-bold text-[2vmax]'>
        Fill the form below
      </h1>
      <div className='flex items-center justify-between gap-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <HiAtSymbol
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='text'
            id='name'
            aria-describedby='helper-text-explanation'
            className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full p-2 ps-10 placeholder:text-gray-900 font-semibold'
            placeholder='Your name'
          />
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <IoMdMail
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='email'
            id='email'
            aria-describedby='helper-text-explanation'
            className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full ps-10 p-2 placeholder:text-gray-900 font-semibold'
            placeholder='Your email'
          />
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <FaPhone
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='tel'
            id='phone'
            aria-describedby='helper-text-explanation'
            className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full p-2 ps-10 placeholder:text-gray-900 font-semibold'
            placeholder='Your phone'
          />
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <GoCodescan
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
            />
          </div>
          <select
            id='countries'
            className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full p-2 ps-10 placeholder:text-gray-900 font-semibold'
          >
            <option value='' className="">Choose your Designation</option>
            <option className="">Photographer</option>
            <option className="">Cinematographer</option>
            <option className="">Traditional Videographer</option>
            <option className="">Drone Operator</option>
          </select>
        </div>
      </div>
      <div>
        <textarea
          id='message'
          rows='4'
          class='block p-2.5 w-full text-[1.1vmax] text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 placeholder:text-gray-900 font-semibold'
          placeholder='Type your address here'
        ></textarea>
      </div>
      <div>
        <textarea
          id='equipment'
          rows='4'
          class='block p-2.5 w-full text-[1.1vmax] text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 placeholder:text-gray-900 font-semibold'
          placeholder='Write down your equipments'
        ></textarea>
      </div>
      <div className=''>
        <label
          className='block mb-2 font-bold text-[1.3vmax] text-gray-900 dark:text-white'
          htmlFor='user_avatar'
        >
          Upload your id proof
        </label>
        <input
          className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full p-2 placeholder:text-gray-900 font-semibold text-sm cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          aria-describedby='user_avatar_help'
          id='user_avatar'
          type='file'
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.2vmax] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize self-center'
      >
        submit
      </button>
    </form>
  );
};

export default JoinUsForm;
