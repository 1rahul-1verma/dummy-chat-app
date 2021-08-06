import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./FriendList.css";

interface friendListPros {
  friends: string[] | undefined;
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
}

function FriendList({
  friends,
  handleSelectedChat,
  handleSelectedChatId
}: friendListPros) {
  return (
    <div className = "friend-container">
      Direct Messages
      {friends?.map((friend, indx) => (
        <div key={indx} className="friend">
          <ChatOption
            chatId={friend}
            handleSelectedChat={handleSelectedChat}
            handleSelectedChatId={handleSelectedChatId}
          />
        </div>
      )     )}
    </div>
  );
}

export {FriendList};
