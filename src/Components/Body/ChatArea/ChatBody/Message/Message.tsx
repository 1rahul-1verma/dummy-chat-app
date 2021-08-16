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
const Message = React.memo(({ sender, message }: messageProps) => {
  const { data: chat, loading: chatLoading } = useQuery<messageInformation>({
    url: `message/id?messageId=${message}`,
    method: "GET",
  });
  const { data: user, loading: userLoading } = useQuery<userInformation>({
    url: `user/id?userId=${chat?.senderId}`,
    method: "GET",
  });
  return (
    <div className="message-container">
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
            <div className="sender-name-loading"> </div>
          ) : (
            <div className="sender-name">{user?.name} :</div>
          )}
          {chatLoading ? (
            <div className="message-content-loading"></div>
          ) : (
            <div className="message-content">{chat?.content}</div>
          )}
        </div>
      </div>
    </div>
  );
});

export { Message };
