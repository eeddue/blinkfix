import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AiOutlineSearch } from "react-icons/ai";
import { users } from "@/utils";
import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraphDataModal({ setOpen, label }) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label,
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: "#8d71eb",
      },
    ],
  };

  return (
    <div className="w-full h-screen backdrop-blur-lg overflow-y-scroll no-scrollbar p-5">
      <div className="overflow-y-scroll no-scrollbar bg-tp rounded-md p-3">
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Bar
              options={{ responsive: true }}
              data={data}
              className="text-white"
            />
          </div>

          <section className="">
            {/* close icon */}
            <IoMdClose
              onClick={() => setOpen((prev) => !prev)}
              className="fixed top-0 right-0 m-8 text-white text-5xl cursor-pointer"
            />

            {/* header */}
            <div className="flex items-center px-2 space-x-5 bg-input rounded-full h-[50px] mb-4 lg:mr-[50px]">
              <button className="h-[40px] w-[40px] rounded-full bg-[#7f7a6e] flex items-center justify-center ">
                <AiOutlineSearch className="text-white text-3xl" />
              </button>
              <input type="text" className="h-full w-auto bg-input rounded-full" />
            </div>

            {/* table */}
            <table className="w-full">
              <thead>
                <tr className="w-full flex-1 flex text-white rounded-md bg-[#706462] py-2">
                  <th className="w-20 text-sm md:text-md">ID</th>
                  <th className="flex-1 text-sm md:text-md">Name</th>
                  <th className="flex-1 text-sm md:text-md">Value 1</th>
                  <th className="flex-1 text-sm md:text-md">Value 2</th>
                  <th className="flex-1 text-sm md:text-md">Date</th>
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
                    <td className="w-20 text-center text-sm md:text-md">
                      {user.id}
                    </td>
                    <td className="flex-1 text-center text-sm md:text-md">
                      Name
                    </td>
                    <td className="flex-1text-center text-sm md:text-md">
                      Value 1
                    </td>
                    <td className="flex-1 text-center text-sm md:text-md">
                      Value 2
                    </td>
                    <td className="flex-1 text-center text-sm md:text-md">
                      Date
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </div>
  );
}

export default GraphDataModal;
