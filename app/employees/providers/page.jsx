"use client";
import EmptyComponent from "@/components/EmptyComponent";
import FilterSection from "@/components/FilterSection";
import Loader from "@/components/Loader";
import UsersNav from "@/components/UsersNav";
import ProviderModal from "@/components/modals/ProviderModal";
import axiosFetch from "@/lib/axios";
import { users } from "@/utils";
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";

function ProviderEmployees() {
  const [open, setOpen] = useState(false);

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    axiosFetch
      .get("/employees/provider")
      .then(({ data }) => setEmployees(data.employees))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (!loading && employees.length === 0)
    return <EmptyComponent title="Provider Employees" />;

  return (
    <div className="">
      <UsersNav title="Providers employees" />
      {/* recipes table */}

      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              <th className="flex-1">Username</th>
              <th className="flex-1">Employer Name</th>
              <th className="flex-1">Employee Type</th>
              <th className="flex-1">Earnings from Tips</th>
              <th className="flex-1">Orders Done</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
              >
                <td className="flex-1 text-center text-lg">{user.id}</td>
                <td className="flex-1 text-center text-lg">{user.username}</td>
                <td className="flex-1 text-center text-lg">Employer</td>
                <td className="flex-1 text-center text-lg">Emp. Type</td>
                <td className="flex-1 text-center text-lg">$254</td>
                <td className="flex-1 text-center text-lg">24</td>
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
            <p className="md:text-lg mb-2">1 : UserId</p>
            <p className="md:text-lg mb-2">Username : {user.username}</p>
            <p className="md:text-lg mb-2">Employer Name : name</p>
            <p className="md:text-lg mb-2">Employee Type : type</p>
            <p className="md:text-lg mb-2">Earnings from tips : $254</p>
            <p className="md:text-lg mb-2">Orders Done : 24</p>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />
      <Modal open={open}>
        <Box>
          <ProviderModal setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}

export default ProviderEmployees;
