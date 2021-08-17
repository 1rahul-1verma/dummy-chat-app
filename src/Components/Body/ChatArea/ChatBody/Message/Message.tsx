import React from "react";
import { useQuery } from "../../../../../Hooks/useQuery";
import { getTime } from "../../../../../Util/getTime";
import { MessageProps } from "../../types/types";
import { MessageInformation } from "../../types/types";
import { UserInformation } from "../../types/types";
import "./Message.css";

const Message = React.memo(({ sender, message }: MessageProps) => {
  const { data: chat, loading: chatLoading } = useQuery<MessageInformation>({
    url: `message/id?messageId=${message}`,
    method: "GET",
  });
  const { data: user, loading: userLoading } = useQuery<UserInformation>({
    url: `user/id?userId=${chat?.senderId}`,
    method: "GET",
  });
  return (
    <div className="message-container">
      <div className="message" data-sender={sender === chat?.senderId}>
        <div>
          {userLoading || !user ? (
            <div className="loading-avatar"></div>
          ) : (
            <img className="message-avatar" src={user.avatar} alt="avatar" />
          )}
        </div>
        <div className="message-content-container">
          {userLoading || !user ? (
            <div className="sender-name-loading"> </div>
          ) : (
            <div className="sender-name">{user.name} : {getTime(chat?.timeStamp)}</div>
          )}
          {chatLoading || !chat ? (
            <div className="message-content-loading"></div>
          ) : (
            <div className="message-content">{chat.content}</div>
          )}
        </div>
      </div>
    </div>
  );
});

export { Message };
