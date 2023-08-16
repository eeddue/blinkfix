"use client";
import { toggleTransaction } from "@/redux/features/modals";
import React from "react";
import { GrClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";

function EditLanguage({ setEdit }) {
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-lg absolute text-white">
      <section className="flex flex-col bg-tp w-full max-w-[600px] p-5 rounded-md  py-10">
        <div className="mb-4">
          <p className="md:text-lg">Language name</p>
          <input
            type="text"
            className="bg-transparent border-b-[0.4px] w-full border-[#ccc] p-2"
          />
        </div>

        <div className="mb-4">
          <p className="md:text-lg">Upload flag png</p>
          <input type="file" id="flag" className="hidden" />
          <label htmlFor="flag">
            <div className="flex items-center justify-between p-2 py-3 bg-gray-400 mt-2 rounded-sm">
              <span className="">Select</span>
              <FiChevronDown className="text-2xl text-white" />
            </div>
          </label>
        </div>

        <div className="mb-4">
          <p className="md:text-lg">Upload language file</p>
          <input type="file" id="language" className="hidden" />
          <label htmlFor="language">
            <div className="flex items-center justify-between p-2 py-3 bg-gray-400 mt-2 rounded-sm">
              <span className="">Select</span>
              <FiChevronDown className="text-2xl text-white" />
            </div>
          </label>
        </div>

        <div className="flex items-center space-x-5 my-7">
          <button
            onClick={() => setEdit((prev) => !prev)}
            className="bg-black text-white h-[45px] flex-1 px-5 rounded-md md:text-md text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => setEdit((prev) => !prev)}
            className="bg-red-700 text-white h-[45px] flex-1 rounded-md md:text-md text-sm"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default EditLanguage;
