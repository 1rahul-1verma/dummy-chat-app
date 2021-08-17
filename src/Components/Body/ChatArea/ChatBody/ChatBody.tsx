import React from "react";
import { Message } from "./Message/Message";
import "./ChatBody.css";
import { ChatBodyProps } from "../types/types";



const ChatBody = React.memo(({ sender, messages, onScroll }: ChatBodyProps) => {
  return (
    <div className="chat-body-container" onScroll={onScroll}>
      { console.log(messages)}
      {messages &&
        messages.map((message) => {
          return <Message sender={sender} key={message} message={message} />;
        })}
    </div>
  );
});

export { ChatBody };
