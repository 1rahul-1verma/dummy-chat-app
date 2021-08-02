import React from "react";
import SideHeader from "./SideHeader/SideHeader";
import "./Sidepanel.css";
import Channels from "./Channels/Channels";
import FriendList from "./FriendList/FriendList";
import Applications from "./Applications/Applications";

interface sidePanel {
  channels: string[];
  friends: string[];
  application: string[];
}
function Sidepanel({ channels, friends, application}: sidePanel) {
  return (
    <div className="container">
      <SideHeader />
      {channels}
      {friends}
      {application}
      
      <Channels />
      <FriendList />
      <Applications />
    </div>
  );
}

export { Sidepanel };
