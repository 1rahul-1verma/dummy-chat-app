import React from "react";
import { MessageBody } from "./MessageBody/MessageBody";
import { MessageBox } from "./MessageBox/MessageBox";
import { MessageHeader } from "./MessageHeader/MessageHeader";
import "./MessageContainer.css";
import { useQuery } from "../../../Hooks/useQuery";

interface messageProps {
  sender: string | null;
  activeChat: string;
  activeChatId: string;
  skip: boolean;
  addNewMessage: (newMessage: string) => void;
}

type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

function MessageContainer({
  activeChat,
  activeChatId,
  addNewMessage,
  sender,
  skip,
}: messageProps) {
  const { data } = useQuery<chatInformation>({
    url: `chat/id?chatId=${activeChatId}`,
    method: "GET",
    skip: skip,
  });
  return (
    <div className="message-container">
      <MessageHeader activeChat={activeChat} />
      <MessageBody sender={sender} messages={data?.messages} />
      <MessageBox sender={sender} addNewMessage={addNewMessage} />
    </div>
  );
}

export { MessageContainer };
