import { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

function FilterSection() {
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0);
  return (
    <section className="flex justify-between w-full bg-[#9e8d84] fixed bottom-0 h-[70px] md:px-10 px-5 items-center">
      <div className="flex items-center h-full space-x-5">
        <p>Rows per page</p>
        <select name="" id="" className="rounded-md px-2 py-1">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="space-x-7">
        <button className="">
          <BsChevronCompactLeft className="text-3xl text-white" />
        </button>
        <button className="">
          <BsChevronCompactRight className="text-3xl text-white" />
        </button>
      </div>
    </section>
  );
}

export default FilterSection;
