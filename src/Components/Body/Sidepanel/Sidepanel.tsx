import React from "react";
import SideHeader from "./SideHeader/SideHeader";
import "./Sidepanel.css";
import Channels from "./Channels/Channels";
import FriendList from "./FriendList/FriendList";
import Applications from "./Applications/Applications";

interface sidePanel {
  channels: string[];
  friends: string[];
  applications: string[];
  handleSelectedChat: (chat: String) => void 
}
function Sidepanel({ channels, friends, applications, handleSelectedChat}: sidePanel) {
  return (
    <div className="container">
      <SideHeader />
      <Channels channels={channels} handleSelectedChat={ handleSelectedChat}/>
      <FriendList friends={ friends} handleSelectedChat={ handleSelectedChat}/>
      <Applications applications={ applications} handleSelectedChat={ handleSelectedChat}/>
    </div>
  );
}

export { Sidepanel };
