"use client";
import React from "react";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";

const NotificationToast = ({ status, msg, show, setShowModal }) => {
  return (
    <div
      id='toast-success'
      className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow fixed top-[15%] right-0 transition duration-500 ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
      role='alert'
    >
      {status === "success" ? (
        <>
          <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg'>
            <div className='bg-[#0e9f6e] p-0.5 rounded-full'>
              <TiTickOutline className='w-6 h-6 text-neutral-100' />
            </div>
            <span className='sr-only'>Check icon</span>
          </div>
          <div className='ms-3 text-sm font-normal'>
            <p>Submitted Successfully.</p>
          </div>
        </>
      ) : (
        <>
          <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg'>
            <IoIosCloseCircle className='w-6 h-6 text-[#f05252]' />
            <span className='sr-only'>Check icon</span>
          </div>
          <div className='ms-3 text-sm font-normal'>
            <p>Error, Try again letter.</p>
          </div>
        </>
      )}
      <button
        type='button'
        className='ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8'
        data-dismiss-target='#toast-success'
        aria-label='Close'
        onClick={() => setShowModal(false)}
      >
        <span className='sr-only'>Close</span>
        <IoMdClose className='w-8 h-8' />
      </button>
    </div>
  );
};

export default NotificationToast;
