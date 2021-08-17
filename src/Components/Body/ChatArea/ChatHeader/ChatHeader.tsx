import React from "react";
import { ChatHeaderProps } from "../types/types";
import "./ChatHeader.css";

const ChatHeader = React.memo(
  ({ activeChat, type, handleFormOpen }: ChatHeaderProps) => {
    return (
      <div className="chat-header-container">
        {activeChat}
        {type === "2" && (
          <button className="add-channel-button" onClick={handleFormOpen}>
            +
          </button>
        )}
      </div>
    );
  }
);

export { ChatHeader };
