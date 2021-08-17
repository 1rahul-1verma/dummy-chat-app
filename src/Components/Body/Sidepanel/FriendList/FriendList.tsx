import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./FriendList.css";

interface friendListPros {
  friends: string[] | undefined;
  SelectedFriend: string;
  handleSelectedFriendId: (chatId: string) => void;
}

const FriendList = React.memo(({
  friends,
  SelectedFriend,
  handleSelectedFriendId
}: friendListPros) => {
  return (
    <div className="friend-container">
      <p className="message-header">Direct Messages</p>
      {friends?.map((friend, indx) => (
        <div key={indx} className="friend" data-selected={SelectedFriend === friend}>
          <ChatOption
            chatId={friend}
            handleSelectedChatId={handleSelectedFriendId}
          />
        </div>
      ))}
    </div>
  );
});

export {FriendList};
