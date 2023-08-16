"use client";
import { toggleRefund, toggleTransaction } from "@/redux/features/modals";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

function RefundModal() {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-lg absolute">
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-center py-10">
        <h2 className="text-xl lg:text-3xl text-white text-center py-[50px] lg:py-[100px]">
          Are you sure you want to refund?
        </h2>

        <div className="flex items-center space-x-5">
          <button
            onClick={() => dispatch(toggleRefund())}
            className="bg-black text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch(toggleRefund())}
            className="bg-red-700 text-white h-[45px] flex-1 rounded-sm text-lg"
          >
            Refund
          </button>
        </div>
      </section>
    </div>
  );
}

export default RefundModal;
