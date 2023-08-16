"use client";
import { selectUserToChange, toggleTransaction } from "@/redux/features/modals";
import { Checkbox } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

function UserTypeModal() {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center items-center h-screen backdrop-blur-lg absolute overflow-y-scroll no-scrollbar">
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-center py-10">
        <h2 className="text-2xl lg:text-3xl text-white text-center py-[40px]">
          Change user type to ;
        </h2>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">End user</p>
        </div>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">Student</p>
        </div>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">Local cook</p>
        </div>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">Restaurant </p>
        </div>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">Food trucks </p>
        </div>

        <div className="flex space-x-5 mb-3 md:mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="md:text-lg text-sm">Shop</p>
        </div>

        <div className="flex items-center space-x-5 mt-5">
          <button
            onClick={() => dispatch(selectUserToChange(null))}
            className="bg-black text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch(selectUserToChange(null))}
            className="bg-red-700 text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Change
          </button>
        </div>
      </section>
    </div>
  );
}

export default UserTypeModal;
