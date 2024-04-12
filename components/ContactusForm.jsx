import React from "react";

const ContactusForm = () => {
  return (
    <form className='flex flex-col items-center sm:my-4 w-[40vmax] sm:w-auto'>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='floating_email'
          id='floating_email'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_email'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Your name
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='email'
          name='floating_password'
          id='floating_password'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_password'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Your Email
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='tel'
          name='repeat_password'
          id='floating_repeat_password'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_repeat_password'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Your Phone
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <label
          htmlFor='countries'
          class='block mb-2 text-[1.2vmax] font-medium text-gray-800'
        >
          Type of Shoot
        </label>
        <select
          id='countries'
          class='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
        >
          <option className='text-gray-800'>Wedding</option>
          <option className='text-gray-800'>Pre-Wedding</option>
          <option className='text-gray-800'>Maternity</option>
          <option className='text-gray-800'>Baby Shoot</option>
          <option className='text-gray-800'>Portfolio</option>
        </select>
      </div>
      <div className='grid grid-cols-2 justify-between items-center gap-4 w-full md:gap-6'>
        <div className='relative z-0 mb-5 group'>
          <input
            type='date'
            name='floating_first_name'
            id='floating_first_name'
            className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_first_name'
            className='font-semibold absolute text-[1.2vmax] text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Event Date
          </label>
        </div>
        <div className='relative z-0 mb-5 group'>
          <input
            type='text'
            name='floating_last_name'
            id='floating_last_name'
            className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_last_name'
            className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Location
          </label>
        </div>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <textarea
          type='text'
          name='floating_email'
          id='floating_email'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 h-32 resize-none peer'
          placeholder=' '
          required
        ></textarea>
        <label
          htmlFor='floating_email'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Any details regarding your shoot
        </label>
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.2vmax] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactusForm;
