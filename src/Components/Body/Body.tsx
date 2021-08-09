import React, { useState, useEffect } from "react";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { NewChannelForm } from "./NewChannelForm/NewChannelForm";
import "./Body.css";

function Body() {
  const [skip, setSkip] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const pollingTimer = setInterval(() => {
      setSkip((prevSkip) => !prevSkip);
    }, 250);

    return () => clearInterval(pollingTimer);
  }, []);

  const handleSelectedChatId = (activeChatId: string): void => {
    setSelectedChatId(activeChatId);
  };

  const handleFormOpen = () => {
    setFormOpen((prevFormOpen) => !prevFormOpen);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  }

  return (
    <div className="Body-container">
      <Sidepanel
        skip={skip}
        selectedListItem={ selectedChatId}
        handleSelectedListId={handleSelectedChatId}
        handleFormOpen={handleFormOpen}
      />
      <MessageContainer
        skip={skip}
        activeChatId={selectedChatId}
      />
      <NewChannelForm
        isOpen={formOpen}
        onClose={handleFormClose}
      />
    </div>
  );
}

export { Body };
