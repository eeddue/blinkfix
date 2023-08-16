"use client";
import FilterSection from "@/components/FilterSection";
import UsersNav from "@/components/UsersNav";
import TransactionModal from "@/components/modals/TransactionDetails";
import { users } from "@/utils";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function Withdrawals() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <UsersNav title="Withdrawals" />
      {/* users table */}

      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="w-20">ID</th>
              <th className="flex-1">Username</th>
              <th className="w-50">Amount</th>
              <th className="flex-1">Date</th>
              <th className="w-50">Status</th>
              <th className="flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
                key={i}
              >
                <td className="w-20 text-center text-lg">{user.id}</td>
                <td className="flex-1 text-center text-lg">{user.username}</td>
                <td className="fw-50 text-center text-lg">$100</td>
                <td className="flex-1 text-center text-lg">12/11/2021</td>
                <td className="w-50 text-center text-lg">status</td>
                <td className="flex-1">
                  <div className="flex flex-wrap justify-center">
                    <button
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      Details
                    </button>
                    <button className="bg-tp shadow-lg py-1 rounded-full px-2 m-2">
                      Mark suspicious
                    </button>
                  </div>
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
            <p className="md:text-lg">Username : {user.username}</p>
            <p className="md:text-lg">Amount : $100</p>
            <p className="md:text-lg">Date : 12/12/2022</p>
            <p className="md:text-lg">Status : pending</p>
            <div className="md:text-lg">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Details
              </button>
              <button className="bg-tp shadow-lg py-1 rounded-full px-3 m-2">
                Mark suspicious
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />

      <Modal open={open}>
        <Box>
          <TransactionModal setOpen={setOpen} isEarning={false} />
        </Box>
      </Modal>
    </div>
  );
}

export default Withdrawals;
