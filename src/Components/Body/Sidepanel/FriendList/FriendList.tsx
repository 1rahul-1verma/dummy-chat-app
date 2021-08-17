import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import { FriendListPros } from "../types/types";
import "./FriendList.css";


const FriendList = React.memo(({
  friends,
  SelectedFriend,
  handleSelectedFriendId
}: FriendListPros) => {
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
