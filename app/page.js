"use client";
import UsersNav from "@/components/UsersNav";
import GraphDataModal from "@/components/modals/GraphDataModal";
import { Box, Modal } from "@mui/material";
import { useCallback, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  const handleOpen = useCallback((text) => {
    setLabel(text);
    setOpen((prev) => !prev);
  }, []);

  return (
    <main className="w-full pb-10">
      <UsersNav title="Dashboard" />

      <section className="mb-3 px-5 w-full">
        <h2 className="lg:text-4xl text-2xl text-white mb-2">Employees</h2>
        <section className="flex flex-shrink-0 gap-5 overflow-x-scroll no-scrollbar ">
          <div
            onClick={() => handleOpen("Total minutes spent on th phone")}
            className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5 cursor-pointer"
          >
            <p className="text-white">Total minutes on the phone</p>
          </div>
          <div
            onClick={() => handleOpen("Total number of calls made")}
            className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5 cursor-pointer"
          >
            <p className="text-white">Total number of calls made</p>
          </div>
          <div
            onClick={() => handleOpen("Total emails sent")}
            className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5 cursor-pointer"
          >
            <p className="text-white">Total email sent</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Total sale made</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Working hours count</p>
          </div>
        </section>
      </section>

      <section className="mb-3 px-5 w-full">
        <h2 className="lg:text-4xl text-2xl text-white mb-2">End Users</h2>
        <section className="flex flex-shrink-0 gap-5 overflow-x-scroll no-scrollbar ">
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Total users</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Active users</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Total users by country</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">User Earnings</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Advertisement clicks</p>
          </div>
        </section>
      </section>

      <section className="mb-3 px-5 w-full">
        <h2 className="lg:text-4xl text-2xl text-white mb-2">Providers</h2>
        <section className="flex flex-shrink-0 gap-5 overflow-x-scroll no-scrollbar ">
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">New Providers</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">All Providers</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Total earnings</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Recipe click earnings</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Orders earnings</p>
          </div>
        </section>
      </section>

      <section className="mb-3 px-5 w-full">
        <h2 className="lg:text-4xl text-2xl text-white mb-2">Disputes</h2>
        <section className="flex flex-shrink-0 gap-5 overflow-x-scroll no-scrollbar ">
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Total disputes</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Disputes won by customer</p>
          </div>
          <div className="flex-none h-[200px] w-[400px] rounded-md shadow-md bg-tp p-5">
            <p className="text-white">Disputes won by provider</p>
          </div>
        </section>
      </section>

      <Modal open={open}>
        <Box>
          <GraphDataModal setOpen={setOpen} label={label} />
        </Box>
      </Modal>
    </main>
  );
}
