"use client";
import React, { useState } from "react";

const ContactusForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [shootType, setShootType] = useState("wedding");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(false);
  const [description, setDescription] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (name.length < 1) {
      setNameError(true);
      return;
    }
    if (email.length < 1) {
      setEmailError(true);
      return;
    }
    if (phone.length < 10) {
      setPhoneError(true);
      return;
    }
    if (location.length < 1) {
      setLocationError(true);
      return;
    }
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/contact-us`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            shoottype: shootType,
            eventdate: eventDate,
            location: location,
            description: description,
          }),
        }
      );
      const res = await resp.json();
      if (resp.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setShootType("wedding");
        setEventDate(new Date().toISOString().split("T")[0]);
        setLocation("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='flex flex-col items-center sm:my-4 w-[40vmax] sm:w-auto'
      onSubmit={handelSubmit}
    >
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='floating_email'
          id='floating_email'
          value={name}
          onChange={(e) => {
            setNameError(false);
            setName(e.target.value);
          }}
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
        />
        <label
          htmlFor='floating_email'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Your name
        </label>
        {nameError && (
          <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
            <span className='font-medium'>Oops!</span> Name can&apos;t be empty!
          </p>
        )}
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='email'
          name='floating_password'
          id='floating_password'
          value={email}
          onChange={(e) => {
            setEmailError(false);
            setEmail(e.target.value);
          }}
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
        {emailError && (
          <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span class='font-medium'>Oops!</span> Email can&apos;t be empty!
          </p>
        )}
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='tel'
          name='repeat_password'
          id='floating_repeat_password'
          value={phone}
          onChange={(e) => {
            setPhoneError(false);
            setPhone(e.target.value);
          }}
          maxLength={10}
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
        />
        <label
          htmlFor='floating_repeat_password'
          className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Your Phone
        </label>
        {phoneError && (
          <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span class='font-medium'>Oops!</span> Phone number required
          </p>
        )}
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <label
          htmlFor='countries'
          className='block mb-2 text-[1.2vmax] font-medium text-gray-800'
        >
          Type of Shoot
        </label>
        <select
          id='countries'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
          value={shootType}
          onChange={(e) => setShootType(e.target.value)}
        >
          <option className='text-gray-800' value='wedding'>
            Wedding
          </option>
          <option className='text-gray-800' value='pre-wedding'>
            Pre-Wedding
          </option>
          <option className='text-gray-800' value='maternity'>
            Maternity
          </option>
          <option className='text-gray-800' value='baby_shoot'>
            Baby Shoot
          </option>
          <option className='text-gray-800' value='portfolio'>
            Portfolio
          </option>
        </select>
      </div>
      <div className='grid grid-cols-2 justify-between items-center gap-4 w-full md:gap-6'>
        <div className='relative z-0 mb-5 group'>
          <input
            type='date'
            name='floating_first_name'
            id='floating_first_name'
            className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            placeholder=' '
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_last_name'
            className='peer-focus:font-medium font-semibold absolute text-[1.2vmax] text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Location
          </label>
          {locationError && (
            <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span class='font-medium'>Oops!</span> location can&apos;t be
              empty
            </p>
          )}
        </div>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <textarea
          type='text'
          name='floating_email'
          id='floating_email'
          className='block py-2.5 px-0 w-full text-[1.2vmax] text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 h-32 resize-none peer'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
