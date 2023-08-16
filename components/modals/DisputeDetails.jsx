"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { selectDispute, selectModal } from "@/redux/features/modals";
import dayjs from "dayjs";

function DisputeDetails({ disputes }) {
  const dispatch = useDispatch();
  const { dispute } = useSelector(selectModal);

  const handleBack = () => {
    dispatch(
      selectDispute(disputes.findIndex((item) => item._id === dispute._id) - 1)
    );
  };
  const handleNext = () => {
    dispatch(
      selectDispute(disputes.findIndex((item) => item._id === dispute._id) + 1)
    );
  };

  return (
    <div className="w-full h-screen backdrop-blur-md overflow-y-scrol no-scrollbar pb-[60px]">
      <IoMdClose
        onClick={() => dispatch(selectDispute(null))}
        className="fixed right-0 top-0 m-5 text-white text-4xl cursor-pointer"
      />

      <section className="mx-auto bg-tp w-full max-w-[600px] p-5 py-10 pb-20 rounded-md justify-center text-center text-white overflow-y-scroll h-full no-scrollbar">
        <div>
          <h2 className="text-2xl md:text-3xl mb-3">{dispute.user.name}</h2>
          <p className="md:text-lg text-md mb-3">
            Dispute title : {dispute.title}
          </p>
          <p className="md:text-lg text-sm mb-3">{dispute.description}</p>
          <p className="md:text-lg text-sm mb-3">Order No. : 234</p>
          <p className="md:text-lg text-sm mb-3">Correspondence count : 3</p>
          <p className="md:text-lg text-sm mb-3">Asigned to : BlinkFix bot</p>
          <p className="md:text-lg text-sm mb-3">
            Created at : {dayjs(dispute.createdAt).format("MMM D, YYYY h:mm A")}
          </p>
          <div className="md:text-lg text-sm mb-3">
            <p className="">Image proof :</p>
            <section className="flex flex-wrap gap-3 mt-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
                alt=""
                className="w-[100px] h-[100px] rounded-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
                alt=""
                className="w-[100px] h-[100px] rounded-md"
              />
            </section>
          </div>
          <div className="flex flex-col items-center mt-10">
            <button className="text-lg w-full max-w-[400px] bg-black py-5 rounded-md mb-5">
              Provider is right
            </button>
            <button className="text-lg w-full max-w-[400px] bg-red-500 py-5 rounded-md mb-5">
              Customer is right
            </button>
          </div>

          <div className="flex items-center space-x-5 mt-5">
            <button
              onClick={() => dispatch(selectDispute(null))}
              className="bg-black text-white h-[45px] flex-1 rounded-sm text-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => dispatch(selectDispute(null))}
              className="bg-red-700 text-white h-[45px] flex-1 rounded-sm text-lg"
            >
              Qualify
            </button>
          </div>
        </div>
      </section>
      <div className="w-full max-w-[600px] bottom-0 left-1/2 -translate-x-1/2  fixed flex justify-between bg-tp p-3">
        <button
          onClick={handleBack}
          disabled={disputes.length < 2}
          className="bg-red-400 rounded-md h-10 md:h-15 px-2"
        >
          <BsChevronCompactLeft className="text-2xl md:text-3xl text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={
            disputes.findIndex((item) => item._id === dispute._id) ===
            disputes.length - 1
          }
          className="bg-red-400 rounded-md h-10 md:h-15 px-2"
        >
          <BsChevronCompactRight className="text-2xl md:text-3xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default DisputeDetails;
