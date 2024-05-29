"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { HiAtSymbol } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import NotificationToast from "./NotificationToast";

const JoinUsForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [designation, setDesignation] = useState("video_editor");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [equipment, setEquipment] = useState();
  const [equipmentError, setEquipmentError] = useState(false);
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
    if (address.length <= 0) {
      setAddressError(true);
      return;
    }
    if (equipment.length <= 0) {
      setEquipmentError(true);
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
      formData.append("address", address);
      formData.append("equipment", equipment);
      formData.append("resume", resume);
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/join-us`,
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
        setAddress("");
        setEquipment("");
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
                placeholder='Your name'
                value={name}
                onChange={(e) => {
                  setNameError(false);
                  setName(e.target.value);
                }}
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
                placeholder='Your email'
                value={email}
                onChange={(e) => {
                  setEmailError(false);
                  setEmail(e.target.value);
                }}
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
              <option value='' className=''>
                Choose your Designation
              </option>
              <option value='photographer'>Photographer</option>
              <option value='cinematographer'>Cinematographer</option>
              <option value='traditional_videographer'>
                Traditional Videographer
              </option>
              <option value='drone_operator'>Drone Operator</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            id='message'
            rows='4'
            class='block p-2.5 w-full text-[1.1vmax] text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 placeholder:text-gray-900 font-semibold'
            placeholder='Type your address here'
            value={address}
            onChange={(e) => {
              setAddressError(false);
              setAddress(e.target.value);
            }}
          ></textarea>
          {addressError && (
            <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
              <span className='font-medium'>Oops!</span> Address can&apos;t be
              empty!
            </p>
          )}
        </div>
        <div>
          <textarea
            id='equipment'
            rows='4'
            class='block p-2.5 w-full text-[1.1vmax] text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus-within:ring-gray-700 focus-within:outline-none focus-within:border-gray-700 placeholder:text-gray-900 font-semibold'
            placeholder='Write down your equipments'
            value={equipment}
            onChange={(e) => {
              setEquipmentError(false);
              setEquipment(e.target.value);
            }}
          ></textarea>
          {equipmentError && (
            <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
              <span className='font-medium'>Oops!</span> Equipment can&apos;t be
              empty!
            </p>
          )}
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
            onChange={(e) => setResume(e.target.files[0])}
            accept='application/pdf'
          />
          {resumeError && (
            <p className='mt-2 text-[1vmax] text-red-600 dark:text-red-500'>
              <span className='font-medium'>Oops!</span> Id isn&apos;t valid!
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

export default JoinUsForm;
