import React, { useEffect, useState } from "react";
import "./Body.css";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { Message } from "./Message/Message";

interface bodyProps {
  user: string | null;
}
interface bodyObj {
    Channels: string[],
    DirectMessages: string[],
    Apps: string[],
}

function Body({ user }: bodyProps) {
  const [userObj, setUserObj] = useState<bodyObj | undefined>(undefined);
  const [selectedChat, setSelectedChat] = useState<String>("Slackbot");
  useEffect(() => {
    async function fetchBody(url: string) {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserObj(data);
          console.log(data);
        });
    }
    fetchBody(`http://localhost:8080/${user}`);
  }, [user]);

  function handleSelectedChat(activeChat: String): void {
    setSelectedChat(activeChat);
  }
  return (
    <div className="Body-container">
      <Sidepanel
        channels={userObj ? userObj.Channels : []}
        friends={userObj ? userObj.DirectMessages : []}
        applications={userObj ? userObj.Apps : []}
        handleSelectedChat={ handleSelectedChat }
      />
      <Message activeChat={ selectedChat }/>
    </div>
  );
}

export { Body };
