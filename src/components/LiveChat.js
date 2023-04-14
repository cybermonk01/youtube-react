import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessagesToChat } from "../utils/chatSlice";
import { generate, generateRandomName } from "../utils/helper";
import ChatMessages from "./ChatMessages";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const chatMessages = useSelector((state) => state.chat.messages);

  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API Polling- chat came ");
      const data = generateRandomName();
      console.log(data);
      dispatch(
        addMessagesToChat({
          name: `${data}`,
          message: " dispatch message",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="bg-slate-100 w-full h-[500px] p-2 overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((chat, i) => {
          return (
            <ChatMessages key={i} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessagesToChat({
              name: generateRandomName(),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="p-1 border border-slate-400 w-64"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="text-green-400 ml-2">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;

//when we hit enter on submit message it will dispatch an action that will call a reducer that wil update the slice of the store and this chat container UI is already subscribed to our store so ui will automagically be updated.
