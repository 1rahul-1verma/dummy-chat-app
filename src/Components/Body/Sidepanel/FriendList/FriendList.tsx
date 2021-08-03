import React from "react";
import "./FriendList.css";

interface friendListPros {
  friends: string[];
  handleSelectedChat: (chat: String) => void;
}

function FriendList({ friends, handleSelectedChat }: friendListPros) {
  return (
    <div className="friend-container">
      Direct Messages
      {friends.map((friend, indx) => (
        <div
          key={indx}
          className="friend"
          onClick={(e) => handleSelectedChat(e.currentTarget.innerText)}
        >
          {friend}
        </div>
      ))}
    </div>
  );
}

export default FriendList;
