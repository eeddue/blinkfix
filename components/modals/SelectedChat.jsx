"use client";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import { selectModal, setSelectedChat } from "@/redux/features/modals";
import axiosFetch from "@/lib/axios";

function SelectedChat() {
  const dispatch = useDispatch();
  const { selectedChat } = useSelector(selectModal);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([...selectedChat.messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    setLoading(true);
    axiosFetch
      .patch(`/chats/${selectedChat.user._id}/messages`, {
        message,
      })
      .then(({ data }) => {
        setMessages((prev) => [...prev, data.message]);
        setMessage("");
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full flex justify-center items-center h-full min-h-screen backdrop-blur-md">
      <IoMdClose
        disabled={loading}
        onClick={() => dispatch(setSelectedChat(null))}
        className="fixed z-10 right-0 top-0 m-5 text-white text-4xl cursor-pointer"
      />

      {/* chat area */}
      <section className="w-full max-w-[600px] lg:p-5 rounded-md lg:py-5 text-white h-screen">
        <section className="bg-tp h-full w-full p-2 h-screen overflow-y-scroll no-scrollbar pb-[150px] pt-10">
          {messages?.map((item, i) => (
            <div
              key={i}
              className={`${
                !item?.user
                  ? "bg-[#5e5a58] ml-auto flex-end rounded-br-none "
                  : "bg-tp items-start rounded-bl-none"
              } text-white p-2 rounded-md w-fit mt-5 min-w-[100px] text-sm px-5 max-w-[80%]`}
            >
              <p className="md:text-lg">{item.message}</p>
              {item?.complaints ? (
                <div className="ml-5">
                  {item.complaints.map((c, i) => (
                    <div className="flex space-x-1 items-center">
                      <p className="">{c}</p>
                      <Checkbox
                        size="small"
                        sx={{
                          color: "red",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                        defaultChecked
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </section>

        {/* form */}
        <form
          onSubmit={sendMessage}
          className="flex items-center bg-[#767065] p-2 fixed bottom-0 left-1/2 transform -translate-x-[50%] w-full max-w-[564px]"
        >
          <input
            placeholder="Type message..."
            className="bg-transparent px-4 w-full placeholder-white"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value.trimStart())}
            disabled={loading}
          />
          <button
            disabled={loading}
            className="h-[45px] w-[45px] rounded-full bg-[#383838] flex items-center justify-center ml-auto"
          >
            <BsArrowRight className="text-2xl text-white" />
          </button>
        </form>
      </section>
    </div>
  );
}

export default SelectedChat;
