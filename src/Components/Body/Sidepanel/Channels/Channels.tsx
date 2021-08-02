import React from "react";
import './Channels.css';

interface channelProps {
    channels: string[];
    handleSelectedChat: (chat: String) => void;
}

function Channels({ channels, handleSelectedChat }: channelProps) {
    function handleClickChange(e: React.MouseEvent<HTMLElement>) {
        handleSelectedChat(e.currentTarget.innerText);
    }
    return (
        <div className="channel-container">
            Channels
            {channels.map((channel, indx) => {
                return <div key={indx} className="channel" onClick={ (e) => handleClickChange(e)}> {channel} </div>
            })}
        </div>
    )
}

export default Channels;
