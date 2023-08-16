"use client";
import { toggleTransaction } from "@/redux/features/modals";
import React from "react";
import { IoMdClose } from "react-icons/io";

function ProviderModal({ setOpen }) {
  return (
    <div className="w-full flex items-center justify-center  h-full min-h-screen backdrop-blur-lg absolute">
      <IoMdClose
        onClick={() => setOpen((prev) => !prev)}
        className="absolute right-0 top-0 m-5 text-4xl cursor-pointer text-white"
      />
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-center py-10 text-white overflow-y-scroll no-scrollbar">
        <div className="flex justify-between border-b-[#ccc] pb-4 border-b-[1px] md:mb-10 sm:mb-5">
          <p className="text-lg">12345</p>
          <p className="text-lg">Employee ID</p>
        </div>
        <div className="flex justify-between border-b-[#ccc] pb-4 border-b-[1px] md:mb-10 sm:mb-5">
          <p className="text-lg">Karol</p>
          <p className="text-lg">Employee</p>
        </div>{" "}
        <div className="flex justify-between border-b-[#ccc] pb-4 border-b-[1px] md:mb-10 sm:mb-5">
          <p className="text-lg">Waiter</p>
          <p className="text-lg">Employee Type</p>
        </div>{" "}
        <div className="flex justify-between border-b-[#ccc] pb-4 border-b-[1px] md:mb-10 sm:mb-5">
          <p className="text-lg">$128</p>
          <p className="text-lg">Employee Tip Earnings</p>
        </div>
        <div className="flex justify-between border-b-[#ccc] pb-4 border-b-[1px] md:mb-10 sm:mb-5">
          <p className="text-lg">400</p>
          <p className="text-lg">Order Done</p>
        </div>
      </section>
    </div>
  );
}

export default ProviderModal;
