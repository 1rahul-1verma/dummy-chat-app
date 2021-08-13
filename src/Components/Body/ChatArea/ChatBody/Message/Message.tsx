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
  avatar: string;
};
function Message({ sender, message }: messageProps) {
  const { data: chat, loading: chatLoading } = useQuery<messageInformation>({
    url: `message/id?messageId=${message}`,
    method: "GET",
  });
  const { data: user, loading: userLoading } = useQuery<userInformation>({
    url: `user/id?userId=${chat?.senderId}`,
    method: "GET",
  });
  return (
    <div className="Message-container">
      <div className="message" data-sender={sender === chat?.senderId}>
        <div>
          {userLoading ? (
            <div className="loading-avatar"></div>
          ) : (
            <img className="message-avatar" src={user?.avatar} alt="avatar" />
          )}
        </div>
        <div className="message-content-container">
          {userLoading ? (
            <div className="sender-name"> ...xXxXxXx...</div>
          ) : (
            <div className="sender-name">{user?.name} :</div>
          )}
          {chatLoading ? (
            <div className="message-content">...............</div>
          ) : (
            <div className="message-content">{chat?.content}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Message };
