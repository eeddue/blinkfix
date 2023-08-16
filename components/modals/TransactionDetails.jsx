"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

function TransactionModal({ setOpen, isEarning }) {
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-md absolute">
      <IoMdClose
        onClick={() => setOpen((prev) => !prev)}
        className="absolute right-0 top-0 m-5 text-white text-4xl"
      />
      <section className="flex flex-col bg-tp w-full h-[90%] my-5 max-w-[600px] p-5 rounded-md justify-center text-center py-10 text-white">
        <h2 className="text-3xl mb-3">User id : username</h2>
        <p className="text-lg sm:text-md mb-3">Order number : 123456</p>
        <p className="text-lg sm:text-md mb-3">Amount: $200</p>
        {isEarning && (
          <>
            <p className="text-lg sm:text-md mb-3">Tips: $100</p>
            <p className="text-lg sm:text-md mb-3">Recipes: $100</p>
          </>
        )}
        <p className="text-lg sm:text-md mb-3">Status : Waiting</p>
        <p className="text-lg sm:text-md mb-3">Date : 12/12/2022</p>
      </section>
    </div>
  );
}

export default TransactionModal;
