"use client";
import EmptyComponent from "@/components/EmptyComponent";
import FilterSection from "@/components/FilterSection";
import Loader from "@/components/Loader";
import UsersNav from "@/components/UsersNav";
import AddNotification from "@/components/modals/AddNotification";
import axiosFetch from "@/lib/axios";
import { selectModal, toggleNotification } from "@/redux/features/modals";
import { Box, Modal } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const { notification } = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    axiosFetch
      .get("/notifications")
      .then(({ data }) => setNotifications(data.notifications))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  return (
    <div className="">
      <UsersNav title="Notifications" />
      {/* recipes table */}

      <div className="bg-tp p-3 my-5 w-full max-w-[600px] mx-auto lg:mx-4 -mt-1 flex items-center space-x-2 justify-between">
        <p className="text-md lg:text-2xl text-white">
          Want to send notifications?
        </p>

        <button
          className="text-white bg-red-700 px-7 rounded-md py-3"
          onClick={() => dispatch(toggleNotification())}
        >
          Send
        </button>
      </div>

      {notifications.length === 0 ? (
        <EmptyComponent title="Notifications" />
      ) : (
        <>
          <div className="overflow-x-scroll no-scrollbar mx-4 hidden lg:block pb-[100px]">
            <table className="w-full overflow-x-scroll">
              <thead>
                <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
                  <th className="flex-1">ID</th>
                  <th className="flex-1">Title</th>
                  <th className="flex-1">Description</th>
                  <th className="flex-1">Date</th>
                  <th className="flex-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notif, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                    } w-full py-3 flex rounded-lg`}
                  >
                    <td className="flex-1 text-center text-lg">{notif._id}</td>
                    <td className="flex-1 text-center text-lg">
                      {notif.title}
                    </td>
                    <td className="flex-1 text-center text-lg">
                      {notif.description}
                    </td>
                    <td className="flex-1 text-center text-lg">
                      {dayjs(notif.createdAt).format("DD/MM/YYYY")}
                    </td>
                    <td className="flex-1 text-center text-lg">
                      <button className="bg-red-500 px-4 py-2 text-white">
                        Resend
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden pb-[100px]">
            {notifications.map((notif, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-[#95837D]" : "bg-[#7a6f6c]"
                }  py-3 flex flex-col p-4 rounded-md mb-3 sm:mx-3 max-w-[600px] md:mx-auto`}
              >
                <p className="md:text-lg mb-2">ID : {notif._id}</p>
                <p className="md:text-lg mb-2">Title : {notif.title}</p>
                <p className="md:text-lg mb-2">
                  Description : {notif.description}
                </p>
                <p className="md:text-lg mb-2">
                  Date : {dayjs(notif.createdAt).format("DD/MM/YYYY")}
                </p>
                <div>
                  <button className="bg-red-500 px-4 py-2 text-white">
                    Resend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* filter */}
      <FilterSection />

      <Modal open={notification}>
        <Box>
          <AddNotification setNotifications={setNotifications} />
        </Box>
      </Modal>
    </div>
  );
}

export default Notifications;
