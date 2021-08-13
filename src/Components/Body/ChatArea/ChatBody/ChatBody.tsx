import React, { useCallback } from "react";
import { Message } from "./Message/Message";
import "./ChatBody.css";

interface messageBodyProps {
  sender: string | null;
  messages: string[] | undefined;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

function ChatBody({ sender, messages, onScroll }: messageBodyProps) {

  return (
    <div className="chat-body-container" onScroll={onScroll}>
      { console.log(messages)}
      {messages &&
        messages.map((message) => {
          return <Message sender={sender} key={message} message={message} />;
        })}
    </div>
  );
}

export { ChatBody };
