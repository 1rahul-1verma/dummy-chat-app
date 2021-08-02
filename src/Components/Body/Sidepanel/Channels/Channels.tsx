import React from "react";
import './Channels.css';

const channelList: string[] = [
  "campus-fte",
  "campus-fte-june",
  "company-announcement",
  "help-onboard-june-21",
];

function Channels() {
    return (
        <div className="channel-container">
            Channels
            {channelList.map((channel, indx) => {
                return <li key = {indx} className="channel"> {channel} </li>
            })}
        </div>
    )
}

export default Channels;
