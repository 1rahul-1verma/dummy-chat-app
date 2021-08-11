import React from "react";
import "./ChatHeader.css";

interface ChatHeaderProps {
  activeChat: string | undefined;
  type: string | undefined;
  handleFormOpen: () => void;
}
function ChatHeader({
  activeChat,
  type,
  handleFormOpen,
}: ChatHeaderProps) {
  return (
    <div className="chat-header-container">
      {activeChat}
      {type === "2" && (
        <button className="Add-channel-button" onClick={handleFormOpen}>
          +
        </button>
      )}
    </div>
  );
}

export { ChatHeader };
