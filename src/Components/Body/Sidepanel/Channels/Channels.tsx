import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import "./Channels.css";

interface channelProps {
  channels: string[] | undefined;
  SelectedChannel: string;
  handleSelectedChannelId: (chatId: string) => void;
  handleFormOpen: () => void;
}

function Channels({
  channels,
  SelectedChannel,
  handleSelectedChannelId,
  handleFormOpen
}: channelProps) {
  return (
    <div className="channel-container">
      <b>Channels</b>
      {channels?.map((channel, indx) => (
        <div key={indx} className="channel" data-selected={SelectedChannel===channel}>
          <ChatOption
            chatId={channel}
            handleSelectedChatId={handleSelectedChannelId}
          />
        </div>
      ))}
      <div className="channel-button" onClick={handleFormOpen} > Add channels </div>
    </div>
  );
}

export {Channels};
