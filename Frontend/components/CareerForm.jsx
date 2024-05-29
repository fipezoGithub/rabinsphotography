"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { HiAtSymbol } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import NotificationToast from "./NotificationToast";

const CareerForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [designation, setDesignation] = useState("video_editor");
  const [resume, setResume] = useState("");
  const [resumeError, setResumeError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [respStatus, setRespStatus] = useState("");
  const [respMsg, setRespMsg] = useState("");

  const handelApply = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (name.length <= 0) {
      setNameError(true);
      return;
    }
    if (email.length <= 0) {
      setEmailError(true);
      return;
    }
    if (phone.length <= 0) {
      setPhoneError(true);
      return;
    }
    if (typeof resume === "string") {
      setResumeError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("designation", designation);
      formData.append("resume", resume);
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/careers`,
        {
          method: "POST",
          body: formData,
        }
      );
      const valid = await resp.json();
      if (resp.ok) {
        setRespMsg("Submitted Successfully.");
        setRespStatus("success");
        setShowModal(true);
        setName("");
        setPhone("");
        setEmail("");
        setResume("");
        setDesignation("video_editor");
      }
    } catch (error) {
      setRespMsg("Error, Try again letter.");
      setRespStatus("failed");
      setShowModal(true);
      console.log(error);
    }
  };

  return (
    <>
      <form
        className='flex flex-col gap-6 items-stretch mx-auto bg-white bg-opacity-40 py-8 sm:min-w-[30vmax] sm:max-w-[45vmax] px-8 rounded-xl shadow-lg'
        onSubmit={handelApply}
      >
        <h1 className='text-center font-bold text-[2vmax]'>
          Fill the form below
        </h1>
        <div className='flex items-center justify-between gap-4'>
          <div>
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
                value={name}
                onChange={(e) => {
                  setNameError(false);
                  setName(e.target.value);
                }}
                placeholder='Your name'
              />
            </div>
            {nameError && (
              <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
                <span className='font-medium'>Oops!</span> Name can&apos;t be
                empty!
              </p>
            )}
          </div>
          <div>
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
                value={email}
                onChange={(e) => {
                  setEmailError(false);
                  setEmail(e.target.value);
                }}
                placeholder='Your email'
              />
            </div>
            {emailError && (
              <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
                <span className='font-medium'>Oops!</span> Email can&apos;t be
                empty!
              </p>
            )}
          </div>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <div>
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
                value={phone}
                onChange={(e) => {
                  setPhoneError(false);
                  setPhone(e.target.value);
                }}
              />
            </div>
            {phoneError && (
              <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
                <span className='font-medium'>Oops!</span> Phone number
                isn&apos;t valid empty!
              </p>
            )}
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
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value='video_editor'>Video Editor</option>
              <option value='relationship_manager'>Relationship Manager</option>
              <option value='photo_editor'>Photo Editor</option>
              <option value='sales_executive'>Sales Executive</option>
              <option value='web_developer'>Web Developer</option>
            </select>
          </div>
        </div>
        <div>
          <div className=''>
            <label
              className='block mb-2 font-bold text-[1.3vmax] text-gray-900 dark:text-white'
              htmlFor='user_avatar'
            >
              Upload your CV
            </label>
            <input
              className='bg-gray-300 border border-gray-300 text-gray-900 text-[1.1vmax] rounded-3xl focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 block w-full p-2 placeholder:text-gray-900 font-semibold text-sm cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
              aria-describedby='user_avatar_help'
              id='user_avatar'
              accept='application/pdf'
              type='file'
              onChange={(e) => {
                setResumeError(false);
                setResume(e.target.files[0]);
              }}
            />
          </div>
          {resumeError && (
            <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
              <span className='font-medium'>Oops!</span> Resume can&apos;t be
              empty!
            </p>
          )}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.2vmax] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize self-center'
        >
          submit
        </button>
      </form>
      <NotificationToast
        show={showModal}
        setShowModal={setShowModal}
        msg={respMsg}
        status={respStatus}
      />
    </>
  );
};

export default CareerForm;
