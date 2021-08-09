import React from "react";
import { useQuery } from "../../../../../Hooks/useQuery";
import "./Message.css";

interface messageProps {
  sender: string | null;
  message: string;
}
type messageInformation = {
  id: string;
  senderId: string;
  content: string;
  timeStamp: string;
};
type userInformation = {
  id: string;
  name: string;
  channels: string[];
  directMessages: string[];
}
function Message({ sender, message }: messageProps) {
  const { data } = useQuery<messageInformation>({
    url: `message/id?messageId=${message}`,
    method: "GET",
  });
  const { data: user } = useQuery<userInformation>({
    url: `user/id?userId=${data?.senderId}`,
    method: "GET",
  });
  return (
    <div className="Message-container">
      <div data-sender={sender === data?.senderId}>
        <b> {user?.name} { data?.timeStamp}</b>
        <p>{data?.content}</p>
      </div>
    </div>
  );
}

export { Message };
