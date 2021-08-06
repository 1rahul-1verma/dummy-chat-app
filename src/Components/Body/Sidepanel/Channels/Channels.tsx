import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./Channels.css";

interface channelProps {
  channels: string[] | undefined;
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
  handleFormOpen: () => void;
}

function Channels({
  channels,
  handleSelectedChat,
  handleSelectedChatId,
  handleFormOpen
}: channelProps) {
  return (
    <div className="channel-container">
      Channels
      {channels?.map((channel, indx) => (
        <div key={indx} className="friend">
          <ChatOption
            chatId={channel}
            handleSelectedChatId={handleSelectedChatId}
            handleSelectedChat={handleSelectedChat}
          />
        </div>
      ))}
      <button onClick={handleFormOpen} > ADD CHANNEL </button>
    </div>
  );
}

export {Channels};
