import React from "react";
import './FriendList.css';

interface friendListPros{
    friends: string[];
    handleSelectedChat: (chat: String) => void;
}

function FriendList({ friends, handleSelectedChat }: friendListPros) {
    function handleClickChange(e: React.MouseEvent<HTMLElement>) {
        handleSelectedChat(e.currentTarget.innerText);
    }
    return (
        <div className="friend-container">
            Direct Messages
            {friends.map((friend, indx) => {
                return <div key={indx} className="friend" onClick={ (e) => handleClickChange(e) }> { friend } </div>
            })}
        </div>
    );
}

export default FriendList;
