import React, { useContext } from "react";
import { MessageBody } from "./MessageBody/MessageBody";
import { MessageBox } from "./MessageBox/MessageBox";
import { MessageHeader } from "./MessageHeader/MessageHeader";
import { useQuery } from "../../../Hooks/useQuery";
import { UserContext } from "../../../App";
import "./MessageContainer.css";

interface messageProps {
  activeChatId: string;
  skip: boolean;
}

type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

function MessageContainer({
  activeChatId,
  skip,
}: messageProps) {
  const sender = useContext(UserContext);
  const { data } = useQuery<chatInformation>({
    url: `chat/id?chatId=${activeChatId}`,
    method: "GET",
    skip: skip,
  });

  return (
    <div className="message-container">
      <MessageHeader activeChat={data?.name} />
      <MessageBody sender={sender} messages={data?.messages} />
      <MessageBox sender={sender} activeChatId={activeChatId} />
    </div>
  );
}

export { MessageContainer };
