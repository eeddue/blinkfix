"use client";
import FilterSection from "@/components/FilterSection";
import UserBanModal from "@/components/modals/UserBanModal";
import UserTypeModal from "@/components/modals/UserTypeModal";
import { users } from "@/utils";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

function UserOrders() {
  const [openBan, setOpenBan] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  return (
    <div className="">
      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <h1 className="text-4xl my-3 text-white">UserId : Username</h1>
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="w-20">ID</th>
              <th className="flex-1">Restaurant name</th>
              <th className="w-50">Amount</th>
              <th className="flex-1">Order status</th>
              <th className="w-50">Date</th>
              <th className="flex-1">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
              >
                <td className="w-20 text-center text-lg">{user.id}</td>
                <td className="flex-1 text-center text-lg">Restaurant</td>
                <td className="w-50 text-center text-lg">$100</td>
                <td className="flex-1 text-center text-lg">Order status</td>
                <td className="w-50 text-center text-lg">Date</td>
                <td className="flex-1 text-center">
                  <button
                    onClick={() => setOpenBan((prev) => !prev)}
                    className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden pb-[100px]">
        {users.map((user, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? "bg-[#95837D]" : "bg-[#7a6f6c]"
            }  py-3 flex flex-col p-4 rounded-md mb-3 sm:mx-3 max-w-[600px] md:mx-auto`}
          >
            <p className="md:text-lg">{user.id}</p>
            <p className="md:text-lg">Restaurant : Restaurant</p>
            <p className="md:text-lg">Amount : $100</p>
            <p className="md:text-lg">Order status : pending</p>
            <p className="md:text-lg">Date : 12/12/2022</p>
            <button
              onClick={() => setOpenBan((prev) => !prev)}
              className="bg-tp shadow-lg py-1 rounded-full px-5 m-2 w-fit"
            >
              View details
            </button>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />
    </div>
  );
}

export default UserOrders;
