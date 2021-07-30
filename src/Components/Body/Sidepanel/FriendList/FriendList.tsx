import React from "react";
import './FriendList.css';

const friendList: string[] = [
  "Slackbot",
  "Rahul Verma",
  "Aditya Vikram Choudhary",
  "Raghav Yadav",
];
function FriendList() {
    return (
        <div className="friend-container">
            Direct Messages
            {friendList.map(friend => {
                return <li className="friend"> { friend } </li>
            })}
        </div>
    );
}

export default FriendList;
