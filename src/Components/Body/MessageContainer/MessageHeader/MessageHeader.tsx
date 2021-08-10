import React from "react";
import "./MessageHeader.css";

interface messageHeaderProps {
  activeChat: string | undefined;
  type: string | undefined;
  handleFormOpen: () => void;
}
function MessageHeader({
  activeChat,
  type,
  handleFormOpen,
}: messageHeaderProps) {
  return (
    <div className="message-header-container">
      {activeChat}
      {type === "2" && (
        <button className="Add-channel-button" onClick={handleFormOpen}>
          +
        </button>
      )}
    </div>
  );
}

export { MessageHeader };
