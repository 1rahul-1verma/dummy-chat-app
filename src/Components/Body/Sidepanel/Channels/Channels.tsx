import React from "react";
import "./Channels.css";

interface channelProps {
  channels: string[];
  handleSelectedChat: (chat: String) => void;
}

function Channels({ channels, handleSelectedChat }: channelProps) {
  return (
    <div className="channel-container">
      Channels
      {channels.map((channel, indx) => (
          <div
            key={indx}
            className="channel"
            onClick={(e) => handleSelectedChat(e.currentTarget.innerText)}
          >
            {channel}
          </div>
        )
      )}
    </div>
  );
}

export default Channels;
