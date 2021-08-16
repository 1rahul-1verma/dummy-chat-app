import React, { useCallback } from "react";
import { Message } from "./Message/Message";
import "./ChatBody.css";

interface messageBodyProps {
  sender: string | null;
  messages: string[] | undefined;
}

const ChatBody = React.memo(({ sender, messages }: messageBodyProps) => {
  return (
    <div className="chat-body-container">
      {messages &&
        messages.map((message) => {
          return <Message sender={sender} key={message} message={message} />;
        })}
    </div>
  );
});

export { ChatBody };
