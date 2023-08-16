"use client";
import { selectUserToBan, toggleTransaction } from "@/redux/features/modals";
import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

function UserBanModal() {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-lg absolute">
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md py-10">
        <h2 className="text-3xl text-white text-center py-[40px]">
          Why do you want to ban this user?
        </h2>

        <div className="flex space-x-5 mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="lg:text-lg text-sm">
            Deliberate disputes initialization
          </p>
        </div>

        <div className="flex space-x-5 mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="lg:text-lg text-sm">Theft from buddy</p>
        </div>

        <div className="flex space-x-5 mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="lg:text-lg text-sm">Repetitive recipe plagriasm</p>
        </div>

        <div className="flex space-x-5 mb-5 items-center text-white">
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <p className="lg:text-lg text-sm">Rudeness towards other users </p>
        </div>

        <div className="flex items-center space-x-5 mt-5">
          <button
            onClick={() => dispatch(selectUserToBan(null))}
            className="bg-black text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch(selectUserToBan(null))}
            className="bg-red-700 text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Change
          </button>
        </div>
      </section>
    </div>
  );
}

export default UserBanModal;
