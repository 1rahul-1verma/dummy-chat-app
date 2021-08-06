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
function Message({ sender, message }: messageProps) {
  const { data } = useQuery<messageInformation>({
    url: `message/id?messageId=${message}`,
    method: "GET",
  });
  return (
    <div className="Message-container">
      <div data-sender={sender === data?.senderId}>{data?.content}</div>
    </div>
  );
}

export { Message };
