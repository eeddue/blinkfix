"use client";
import { selectModal, selectOrder } from "@/redux/features/modals";
import dayjs from "dayjs";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function OrderDetails() {
  const dispatch = useDispatch();
  const { order } = useSelector(selectModal);
  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-lg absolute">
      <IoMdClose
        onClick={() => dispatch(selectOrder(null))}
        className="absolute right-0 top-0 m-5 text-4xl cursor-pointer text-white"
      />
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-center py-10">
        <h2 className="text-white text-lg ">Provider : XYZ</h2>
        <p className="text-white text-lg ">
          Order number : {order?.orderBy.name}
        </p>
        <p className="text-white text-lg ">Amount: ${order?.totalAmount}</p>
        <p className="text-white text-lg ">Status : {order?.orderStatus}</p>
        <p className="text-white text-lg ">
          Date : {dayjs(order.orderDate).format("DD/MM/YYYY")}
        </p>
        <div className="text-white text-lg ">
          <p className="text-white text-lg ">Items Ordered : </p>
          {order?.orderItems.map((item, i) => (
            <p key={item._id} className="text-white text-lg ">
              {i+1 + " : " + item.itemId}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OrderDetails;
