"use client";
import EmptyComponent from "@/components/EmptyComponent";
import Loader from "@/components/Loader";
import UsersNav from "@/components/UsersNav";
import SelectedChat from "@/components/modals/SelectedChat";
import axiosFetch from "@/lib/axios";
import { selectModal, setSelectedChat } from "@/redux/features/modals";
import { url } from "@/utils";
import { Box, Modal } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function Chats() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { selectedChat } = useSelector(selectModal);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    axiosFetch
      .get("/chats")
      .then(({ data }) => setChats(data.chats))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const getLastMessage = (chat) => {
    const chatMsgs = [...chat.messages];
    const filtered = chatMsgs.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return filtered[0];
  };

  const onClick = useCallback((chat) => {
    dispatch(setSelectedChat(chat));
  }, []);

  if (loading) return <Loader />;

  if (!loading && chats.length === 0) return <EmptyComponent title="Chats" />;

  return (
    <div>
      <section className="mx-auto w-full max-w-[700px] px-2">
        <h1 className="text-xl md:text-3xl text-white font-bold my-5">Chats</h1>
        {chats.map((chat, i) => (
          <div
            key={i}
            onClick={() => onClick(chat)}
            className="p-2 bg-tp rounded-md flex space-x-4 mb-2 cursor-pointer"
          >
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-tp"></div>
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {chat.user.name}
              </h2>
              <p className="truncate text-sm md:text-lg">
                {getLastMessage(chat).message}
              </p>
              <p className="text-xs md:text-sm">
                {dayjs(getLastMessage(chat).createdAt).format(
                  "MMMM D, YYYY h:mm A"
                )}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Modal open={selectedChat != null}>
        <Box>
          <SelectedChat />
        </Box>
      </Modal>
    </div>
  );
}

export default Chats;
