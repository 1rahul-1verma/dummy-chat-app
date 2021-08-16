import React from "react";
import "./ChatHeader.css";

interface ChatHeaderProps {
  activeChat: string | undefined;
  type: string | undefined;
  handleFormOpen: () => void;
}
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
