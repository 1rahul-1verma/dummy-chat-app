import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./Channels.css";

interface channelProps {
  channels: string[];
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
  handleChatMessages: (message: string[]) => void;
}

function Channels({
  channels,
  handleSelectedChat,
  handleSelectedChatId,
  handleChatMessages,
}: channelProps) {
  return (
    <div className="channel-container">
      Channels
      { console.log(channels)}
      {channels.map((channel, indx) => (
        <div key={indx} className="friend">
          <ChatOption
            chatId={channel}
            handleSelectedChatId={handleSelectedChatId}
            handleSelectedChat={handleSelectedChat}
            handleChatMessages={ handleChatMessages}
          />
        </div>
      ))}
    </div>
  );
}

export {Channels};
