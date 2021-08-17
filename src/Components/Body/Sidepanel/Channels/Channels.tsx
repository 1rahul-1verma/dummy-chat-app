import React from "react";
import { ChatOption } from "../ChatOption/ChatOption";
import { ChannelProps } from "../types/types";

import "./Channels.css";

const Channels = React.memo(({
  channels,
  SelectedChannel,
  handleSelectedChannelId,
  handleFormOpen
}: ChannelProps) => {
  return (
    <div className="channel-container">
      <p className="channel-header">Channels</p>
      {channels?.map((channel, indx) => (
        <div key={indx} className="channel" data-selected={SelectedChannel === channel}>
          <ChatOption
            chatId={channel}
            handleSelectedChatId={handleSelectedChannelId}
          />
        </div>
      ))}
      <div className="channel-button" onClick={handleFormOpen} > Add channels </div>
    </div>
  );
});

export {Channels};
