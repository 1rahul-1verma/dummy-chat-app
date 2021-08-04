import React from "react";
import SideHeader from "./SideHeader/SideHeader";
import {Channels} from "./Channels/Channels";
import {FriendList} from "./FriendList/FriendList";
import "./Sidepanel.css";

interface sidePanel {
  channels: string[];
  friends: string[];
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
  handleChatMessages: (messages: string[]) => void;
}
function Sidepanel({
  channels,
  friends,
  handleSelectedChat,
  handleSelectedChatId,
  handleChatMessages
}: sidePanel) {
  return (
    <div className="container">
      <SideHeader />
      <Channels
        channels={channels}
        handleSelectedChat={handleSelectedChat}
        handleSelectedChatId={handleSelectedChatId}
        handleChatMessages={ handleChatMessages}
      />
      <FriendList
        friends={friends}
        handleSelectedChat={handleSelectedChat}
        handleSelectedChatId={handleSelectedChatId}
        handleChatMessages={ handleChatMessages}
      />
    </div>
  );
}

export { Sidepanel };
