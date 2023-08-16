"use client";
import { toggleTransaction } from "@/redux/features/modals";
import React from "react";
import { GrClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";

function ViewLanguageModal({ setOpen }) {
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-lg absolute text-white">
      <section className="flex flex-col bg-tp w-full max-w-[600px] p-5 rounded-md  py-10">
        <div className="mb-10 flex items-center justify-between border-b-[#ccc] border-b-[0.3px] pb-2">
          <p className="md:text-lg">Language name</p>
          <p className="md:text-lg">Language name</p>
        </div>

        <div className="mb-10 flex items-center justify-between border-b-[#ccc] border-b-[0.3px] pb-2">
          <p className="md:text-lg">Language flag</p>
          <img
            src="https://media.istockphoto.com/id/1364384856/vector/national-flag-of-poland-eps-file-polish-flag-vector-file.jpg?s=612x612&w=0&k=20&c=6Vi_9I-c_JyFt2w-WOmUFr20aNTsd6HRtndjDovUkKo="
            alt=""
            className="w-[60px] h-[30px] rounded-md ml-auto"
          />
        </div>

        <div className="mb-10 flex items-center justify-between border-b-[#ccc] border-b-[0.3px] pb-2">
          <p className="md:text-lg">Language file dir</p>
          <p className="md:text-lg">Language file dir</p>
        </div>

        <div className="flex items-center space-x-5 my-7">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-black text-white h-[45px] w-fit px-5 rounded-md md:text-md text-sm"
          >
            Close
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-red-700 text-white h-[45px] flex-1 rounded-md md:text-md text-sm"
          >
            DownLoad language sample
          </button>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-red-700 text-white h-[45px] rounded-md md:text-md text-sm px-5 mx-auto"
        >
          Upload new Language
        </button>
      </section>
    </div>
  );
}

export default ViewLanguageModal;
