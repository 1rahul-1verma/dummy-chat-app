import React from "react";
import { Message } from "./Message/Message";
import "./MessageBody.css";

interface messageBodyProps {
  sender: string | null;
  messages: string[] | undefined;
}

function MessageBody({ sender, messages }: messageBodyProps) {
  return (
    <div className="messageBody-container">
      {messages &&
        messages.map((message, indx) => {
          return <Message sender={sender} key={indx} message={message} />;
        })}
    </div>
  );
}

export { MessageBody };
