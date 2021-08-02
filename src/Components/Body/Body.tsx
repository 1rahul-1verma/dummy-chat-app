import React, { useEffect } from "react";
import "./Body.css";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { Message } from "./Message/Message";

interface bodyProps {
  user: string | null;
}
interface bodyObj {
    Channels: string[],
    DM: string[],
    Application: string[],
}
let bodyObject: bodyObj = { Channels: [], DM: [], Application: []};
function Body({ user }: bodyProps) {
  useEffect(() => {
    async function fetchBody(url: string) {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          bodyObject = data;
        });
    }
    fetchBody(`http://localhost:8080/${user}`);
  });

  return (
    <div className="Body-container">
      <Sidepanel
        channels={bodyObject.Channels}
        friends={bodyObject.DM}
        application={bodyObject.Application}
      />
      <Message />
    </div>
  );
}

export { Body };
