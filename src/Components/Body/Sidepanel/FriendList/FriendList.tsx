import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./FriendList.css";

interface friendListPros {
  friends: string[] | undefined;
  SelectedFriend: string;
  handleSelectedFriendId: (chatId: string) => void;
}

function FriendList({
  friends,
  SelectedFriend,
  handleSelectedFriendId
}: friendListPros) {
  return (
    <div className = "friend-container">
      <b>Direct Messages</b>
      {friends?.map((friend, indx) => (
        <div key={indx} className="friend" data-selected={ SelectedFriend===friend}>
          <ChatOption
            chatId={friend}
            handleSelectedChatId={handleSelectedFriendId}
          />
        </div>
      )     )}
    </div>
  );
}

export {FriendList};
