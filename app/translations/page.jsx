"use client";
import FilterSection from "@/components/FilterSection";
import UsersNav from "@/components/UsersNav";
import EditLanguage from "@/components/modals/EditLanguage";
import ViewLanguageModal from "@/components/modals/ViewLanguageModal";
import { users } from "@/utils";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

function Translations() {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <div className="">
      <UsersNav title="Translations" />
      {/* Translations table */}

      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              <th className="flex-1">Language</th>
              <th className="flex-1">Language flag</th>
              <th className="flex-1">Language pack dir</th>
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
              >
                <td className="flex-1 text-center text-lg">{user.id}</td>
                <td className="flex-1 text-center text-lg">Language</td>
                <td className="flex-1 flex justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1364384856/vector/national-flag-of-poland-eps-file-polish-flag-vector-file.jpg?s=612x612&w=0&k=20&c=6Vi_9I-c_JyFt2w-WOmUFr20aNTsd6HRtndjDovUkKo="
                    alt=""
                    className="w-[80px] h-[40px] rounded-md"
                  />
                </td>
                <td className="flex-1 text-center text-lg">Dish</td>
                <td className="flex-1">
                  <div className="flex flex-wrap justify-center">
                    <button
                      onClick={() => setOpen((prev) => !prev)}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      View
                    </button>
                    <button
                      onClick={() => setEdit((prev) => !prev)}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Edit
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
            <p className="md:text-lg">Language : name</p>
            <p className="md:text-lg flex">
              Flag :{" "}
              <img
                src="https://media.istockphoto.com/id/1364384856/vector/national-flag-of-poland-eps-file-polish-flag-vector-file.jpg?s=612x612&w=0&k=20&c=6Vi_9I-c_JyFt2w-WOmUFr20aNTsd6HRtndjDovUkKo="
                alt=""
                className="w-[60px] h-[30px] rounded-md ml-3"
              />
            </p>
            <p className="md:text-lg">Language Pack dir : dir__name</p>
            <div className="md:text-lg">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-tp shadow-lg py-1 rounded-full px-5 m-2"
              >
                View
              </button>
              <button
                onClick={() => setEdit((prev) => !prev)}
                className="bg-tp shadow-lg py-1 rounded-full px-5 m-2"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />

      <Modal open={open}>
        <Box>
          <ViewLanguageModal setOpen={setOpen} />
        </Box>
      </Modal>

      <Modal open={edit}>
        <Box>
          <EditLanguage setEdit={setEdit} />
        </Box>
      </Modal>
    </div>
  );
}

export default Translations;
