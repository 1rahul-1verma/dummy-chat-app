import React, { useState, useCallback } from "react";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { ChatArea } from "./ChatArea/ChatArea";
import { NewChannelForm } from "./NewChannelForm/NewChannelForm";
import { useModal } from "../../Hooks/useModal";
import "./Body.css";

const Body = React.memo(() => {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>("");
  const {
    isModalOpen: isNewChannelFormOpen,
    toggleModalState: toggleNewChannelForm,
  } = useModal();

  const handleSelectedChatId = useCallback((activeChatId: string | undefined): void => {
    setSelectedChatId(activeChatId);
  }, []);

  return (
    <div className="body-container">
      <Sidepanel
        selectedListItem={selectedChatId}
        handleSelectedListItem={handleSelectedChatId}
        handleFormOpen={toggleNewChannelForm}
      />
      <ChatArea activeChatId={selectedChatId} />
      <NewChannelForm isOpen={isNewChannelFormOpen} onClose={toggleNewChannelForm} />
    </div>
  );
})

export { Body };
