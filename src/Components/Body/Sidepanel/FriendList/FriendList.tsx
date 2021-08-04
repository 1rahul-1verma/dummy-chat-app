import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./FriendList.css";

interface friendListPros {
  friends: string[];
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
  handleChatMessages: (message: string[]) => void;
}

function FriendList({
  friends,
  handleSelectedChat,
  handleSelectedChatId,
  handleChatMessages
}: friendListPros) {
  return (
    <div>
      Direct Messages
      {friends.map((friend, indx) => (
        <div key={indx} className="friend">
          <ChatOption
            chatId={friend}
            handleSelectedChat={handleSelectedChat}
            handleSelectedChatId={handleSelectedChatId}
            handleChatMessages={ handleChatMessages}
          />
        </div>
      )     )}
    </div>
  );
}

export {FriendList};
