"use client";
import { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function UsersNav({ title }) {
  const [selected, setSelected] = useState("Day");

  const select = useCallback((value) => {
    setSelected(value);
  });

  const getSelected = (value) => {
    if (selected === value) return " bg-[#c9bdb5]";
    return " bg-[#AFA395]";
  };

  return (
    <header className="grid xl:flex grid-cols-1 gap-5 items-center p-4">
      <h2 className="text-white lg:text-4xl text-2xl">{title}</h2>

      <div className="grid lg:flex grid-cols-1 w-full gap-5">
        <section className="w-full rounded-full flex items-center bg-[#AFA395] h-[50px] overflow-hidden justify-evenly">
          <button
            onClick={() => setSelected("Day")}
            className={"h-full flex-1" + getSelected("Day")}
          >
            <p className="text-xs sm:text-sm md:text-md">Day</p>
          </button>
          <button
            onClick={() => setSelected("Month")}
            className={"h-full flex-1" + getSelected("Month")}
          >
            <p className="text-xs sm:text-sm md:text-md">Month</p>
          </button>
          <button
            onClick={() => setSelected("3 Months")}
            className={"h-full flex-1" + getSelected("3 Months")}
          >
            <p className="text-xs sm:text-sm md:text-md">3 Months</p>
          </button>
          <button
            onClick={() => setSelected("6 Months")}
            className={"h-full flex-1" + getSelected("6 Months")}
          >
            <p className="text-xs sm:text-sm md:text-md">6 Months</p>
          </button>
          <button
            onClick={() => setSelected("1 Year")}
            className={"h-full flex-1" + getSelected("1 Year")}
          >
            <p className="text-xs sm:text-sm md:text-md">1 Year</p>
          </button>
          <button
            onClick={() => setSelected("6 Years")}
            className={"h-full flex-1" + getSelected("6 Years")}
          >
            <p className="text-xs sm:text-sm md:text-md">6 Years</p>
          </button>
        </section>
        <div className="flex items-center bg-input rounded-full h-[50px] w-full lg:w-[400px] px-2 space-x-5 overflow-hidden">
          <button className="h-[40px] w-[40px] rounded-full bg-[#7f7a6e] flex items-center justify-center ">
            <AiOutlineSearch className="text-white text-3xl" />
          </button>
          <input type="text" className="h-full w-auto bg-input" />
        </div>
      </div>
    </header>
  );
}

export default UsersNav;
