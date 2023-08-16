"use client";
import { navItems } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <header className="w-full bg-[#00000050] h-[70px] px-5 z-10 top-0 sticky">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            width={300}
            className="hidden lg:block"
            height={50}
            src="/logo.png"
            alt="logo"
          />
          <Image
            width={70}
            className="lg:hidden"
            height={70}
            src="/small-logo.png"
            alt="logo"
          />
        </Link>
        <AiOutlineMenu
          onClick={handleOpen}
          className="text-4xl cursor-pointer text-white"
        />
      </nav>
      {open ? (
        <div className="w-full h-full min-h-screen backdrop-blur-md fixed top-0 right-0 overflow-y-scroll no-scrollbar pb-30">
          <ul className="bg-navbg p-5 flex flex-col float-right w-full max-w-[450px] pb-[100px]">
            <div className="flex space-x-5 items-center">
              <IoMdClose
                className="text-black text-4xl text-white left-[10px] cursor-pointer"
                onClick={handleOpen}
              />
              <Link
                href={navItems[0].path}
                className="w-full rounded-lg mt-3 bg-[#3a3a3a] p-5 text-center text-white"
                onClick={handleOpen}
              >
                <span className="">{navItems[0].name}</span>
              </Link>
            </div>

            {navItems.map((item, i) =>
              i != 0 ? (
                <Link
                  key={i}
                  href={item.path}
                  className="w-full rounded-lg mt-3 bg-[#3a3a3a] p-5 text-center text-white"
                  onClick={handleOpen}
                >
                  <span className="">{item.name}</span>
                </Link>
              ) : null
            )}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
