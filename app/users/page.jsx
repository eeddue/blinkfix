"use client";
import EmptyComponent from "@/components/EmptyComponent";
import FilterSection from "@/components/FilterSection";
import Loader from "@/components/Loader";
import UsersNav from "@/components/UsersNav";
import UserBanModal from "@/components/modals/UserBanModal";
import UserTypeModal from "@/components/modals/UserTypeModal";
import axiosFetch from "@/lib/axios";
import {
  selectModal,
  selectUserToChange,
  selectUserToBan,
} from "@/redux/features/modals";
import { Box, Modal } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const [openBan, setOpenBan] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { userToBan, userToChange } = useSelector(selectModal);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    axiosFetch
      .get("/users")
      .then(({ data }) => setUsers(data.users))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (!loading && users.length === 0) return <EmptyComponent title="Users" />;

  return (
    <div className="">
      <UsersNav title="Users" />
      {/* users table */}

      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              <th className="flex-1">Username</th>
              <th className="w-50">Country</th>
              <th className="flex-1">Role</th>
              <th className="flex-1">Created At</th>
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
                <td className="flex-1 text-center text-sm">{user._id}</td>
                <td className="flex-1 text-center text-lg">{user.name}</td>
                <td className="w-50 text-center text-lg">
                  {user.address[0].country}
                </td>
                <td className="flex-1 text-center text-lg">{user.userRole}</td>
                <td className="flex-1 text-center text-lg">12/12/2022</td>
                <td className="flex-1">
                  <div className="flex flex-wrap justify-center">
                    <button
                      onClick={() => dispatch(selectUserToBan(user))}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Unban
                    </button>
                    <button
                      onClick={() => dispatch(selectUserToChange(user))}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Change type
                    </button>
                    <Link href={`/users/${user._id}/withdrawals`}>
                      <button className="bg-tp shadow-lg py-1 rounded-full px-2 m-2">
                        Withdrawals
                      </button>
                    </Link>
                    <Link href={`/users/${user._id}/recipes`}>
                      <button className="bg-tp shadow-lg py-1 rounded-full px-2 m-2">
                        View recipes
                      </button>
                    </Link>
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
            <p className="md:text-lg">{user._id}</p>
            <p className="md:text-lg">Username : {user.name}</p>
            <p className="md:text-lg">Country : {user.address[0].country}</p>
            <p className="md:text-lg">Type : {user.userRole}</p>
            <p className="md:text-lg">Created At : 12/12/2022</p>
            <div className="md:text-lg">
              <button
                onClick={() => dispatch(selectUserToBan(user))}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Unban
              </button>
              <button
                onClick={() => dispatch(selectUserToChange(user))}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Change type
              </button>
              <Link href={`/users/${user._id}/withdrawals`}>
                <button className="bg-tp shadow-lg py-1 rounded-full px-3 m-2">
                  Withdrawals
                </button>
              </Link>
              <Link href={`/user/${user._id}/recipes`}>
                <button className="bg-tp shadow-lg py-1 rounded-full px-3 m-2">
                  View recipes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />

      <Modal open={userToBan != null}>
        <Box>
          <UserBanModal setOpen={setOpenBan} />
        </Box>
      </Modal>

      <Modal open={userToChange != null}>
        <Box>
          <UserTypeModal setOpen={setOpenStatus} />
        </Box>
      </Modal>
    </div>
  );
}

export default Users;
