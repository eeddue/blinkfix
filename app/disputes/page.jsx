"use client";
import FilterSection from "@/components/FilterSection";
import UsersNav from "@/components/UsersNav";
import DisputeDetails from "@/components/modals/DisputeDetails";
import ParticipateModal from "@/components/modals/ParticipateModal";
import { users } from "@/utils";
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axiosFetch from "@/lib/axios";
import Loader from "@/components/Loader";
import EmptyComponent from "@/components/EmptyComponent";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChat,
  selectDispute,
  selectModal,
} from "@/redux/features/modals";

function Disputes() {
  const [open, setOpen] = useState(false);
  const [participate, setParticipate] = useState(false);
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { chat, dispute } = useSelector(selectModal);

  useEffect(() => {
    fetchDisputes();
  }, []);

  const fetchDisputes = async () => {
    axiosFetch
      .get("/disputes")
      .then(({ data }) => setDisputes(data.disputes))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (!loading && disputes.length === 0)
    return <EmptyComponent title="Disputes" />;

  return (
    <div className="">
      <UsersNav title="Disputes" />
      {/* Disputes table */}

      <div className="overflow-x-scroll no-scrollbar mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              {/* <th className="w-50">Username</th> */}
              <th className="flex-1">Title</th>
              <th className="flex-1">Description</th>
              {/* <th className="w-50">Order no.</th> */}
              <th className="flex-1">Created At</th>
              {/* <th className="flex-1">Updated At</th> */}
              <th className="flex-1">Assigned to</th>
              <th className="flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
              >
                <td className="flex-1 text-center text-sm">{dispute._id}</td>
                {/* <td className="w-50 text-center text-lg">Random</td> */}
                <td className="flex-1 text-center text-sm">{dispute.title}</td>
                <td className="flex-1 text-center text-sm">
                  {dispute.description}
                </td>
                {/* <td className="w-50 text-center text-sm">121212</td> */}
                <td className="flex-1 text-center text-sm">
                  {dayjs(dispute.createdAt).format("MMM D, YYYY h:mm A")}
                </td>
                {/* <td className="flex-1 text-center text-sm">12/12/2022</td> */}
                <td className="flex-1 text-center text-sm">Blinkfix bot</td>
                <td className="flex-1">
                  <div className="flex flex-wrap justify-center">
                    <button
                      onClick={() => dispatch(selectDispute(dispute))}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => dispatch(selectChat(dispute))}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Participate
                    </button>
                    <button className="bg-tp shadow-lg py-1 rounded-full px-2 m-2">
                      Ask for proofs
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden pb-[100px]">
        {disputes.map((dispute, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? "bg-[#95837D]" : "bg-[#7a6f6c]"
            }  py-3 flex flex-col p-4 rounded-md mb-3 sm:mx-3 max-w-[600px] md:mx-auto`}
          >
            <p className="md:text-lg">ID : {dispute._id}</p>
            {/* <p className="md:text-lg">Username : Random</p> */}
            <p className="md:text-lg">Title : {dispute.title}</p>
            <p className="md:text-lg">Description : {dispute.description}</p>
            {/* <p className="md:text-lg">Order no : 121212</p> */}
            <p className="md:text-lg">
              Created At :{" "}
              {dayjs(dispute.createdAt).format("MMM D, YYYY h:mm A")}
            </p>
            {/* <p className="md:text-lg">Updated At : 12/12/2022</p> */}
            <p className="md:text-lg">Assigned to : Blinkfix Bot</p>

            <div className="md:text-lg">
              <button
                onClick={() => dispatch(selectDispute(dispute))}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Details
              </button>

              <button
                onClick={() => dispatch(selectChat(dispute))}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Participate
              </button>

              <button className="bg-tp shadow-lg py-1 rounded-full px-3 m-2">
                Ask for proofs
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />

      <Modal open={dispute != null}>
        <Box>
          <DisputeDetails disputes={disputes} setOpen={setOpen} />
        </Box>
      </Modal>

      <Modal open={chat != null}>
        <Box>
          <ParticipateModal setOpen={setParticipate} />
        </Box>
      </Modal>
    </div>
  );
}

export default Disputes;
