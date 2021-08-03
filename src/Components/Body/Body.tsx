import React, { useEffect, useState } from "react";
import "./Body.css";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { Message } from "./Message/Message";

const ROOT_URL = require("../../constants");

interface bodyProps {
  user: string | null;
}
interface userSubscriptions {
  channels: string[];
  directMessages: string[];
  apps: string[];
}

function Body({ user }: bodyProps) {
  const [userSubs, setUserSubs] = useState<userSubscriptions | undefined>(
    undefined
  );
  const [selectedChat, setSelectedChat] = useState<String>("Slackbot");
  useEffect(() => {
    async function fetchBody(url: string) {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserSubs(data);
          console.log(data);
        });
    }
    fetchBody(`${ROOT_URL}${user}`);
  }, [user]);

  const handleSelectedChat = (activeChat: String): void => {
    setSelectedChat(activeChat);
  };
  return (
    <div className="Body-container">
      <Sidepanel
        channels={userSubs ? userSubs.channels : []}
        friends={userSubs ? userSubs.directMessages : []}
        applications={userSubs ? userSubs.apps : []}
        handleSelectedChat={handleSelectedChat}
      />
      <Message activeChat={selectedChat} />
    </div>
  );
}

export { Body };
