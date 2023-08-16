"use client";
import axiosFetch from "@/lib/axios";
import { toggleNotification } from "@/redux/features/modals";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { io } from "socket.io-client";

function AddNotification({ setNotifications }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [to, setTo] = useState([]);
  const [countries, setCountries] = useState([]);

  const socket = useRef(io("http://localhost:5000"));

  //fetch countries
  useEffect(() => {
    (async () => {
      fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => {
          setCountries([
            { name: "Everyone" },
            ...data.map((c) => {
              return { name: c.name };
            }),
          ]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();
  }, []);

  const onSend = async (e) => {
    e.preventDefault();

    const data = to.map((i) => i.name);

    if (!title || !desc || data.length < 1)
      return alert("All fields are required.");

    setLoading(true);
    axiosFetch
      .post("/notifications", { to: data, title, description: desc })
      .then(({ data }) => {
        setNotifications((prev) => [...prev, data.notification]);
        socket.emit("send-notification", data.notification);
        dispatch(toggleNotification());
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full flex justify-center r h-screen backdrop-blur-lg overflow-y-scroll no-scrollbar pt-10">
      <IoMdClose
        disabled={loading}
        onClick={() => dispatch(toggleNotification())}
        className="absolute right-0 top-0 m-5 text-4xl cursor-pointer text-white"
      />
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-cener py-20 text-white overflow-y-scroll no-scrollbar">
        <form onSubmit={onSend}>
          <h2 className="text-xl md:text-4xl text-center text-white mb-3">
            Send a notification
          </h2>

          <div className="mt-3">
            <p className="text-lg md:text-xl">Title</p>
            <input
              type="text"
              placeholder="Enter title..."
              className="w-full h-[50px] bg-input text-white px-4 mt-1 placeholder-white"
              value={title}
              onChange={(e) => setTitle(e.target.value.trimStart())}
            />
          </div>

          <div className="mt-3">
            <p className="text-lg md:text-xl">Description</p>
            <textarea
              type="text"
              placeholder="Enter title..."
              className="w-full bg-input text-white p-4 mt-1 placeholder-white"
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value.trimStart())}
            />
          </div>

          <div className="mt-3">
            <p className="text-lg md:text-xl">Send to</p>

            <Multiselect
              options={countries}
              selectedValues={to}
              onSelect={(item) => setTo(item)}
              onRemove={(item) =>
                setTo((prev) => prev.filter((i) => i.name !== item.name))
              }
              displayValue="name"
              showCheckbox={true}
              closeOnSelect={false}
              className="text-black"
            />
          </div>

          <button
            disabled={loading}
            className="w-full h-[50px] mx-auto bg-red-500 text-lg mt-7"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddNotification;
