import React, { useState, useEffect } from "react";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { useMutation } from "../../Hooks/useMutation";
import { ROOT_URL } from "../../constants";
import { NewChannelForm } from "./NewChannelForm/NewChannelForm";
import { mutationCallback } from "../Util/mutationCallback";
import "./Body.css";

interface bodyProps {
  user: string | null;
}

type chatInformation = {
  id: string;
  name: string;
  userID: string[];
  messages: string[];
  type: string;
};

function Body({ user }: bodyProps) {
  const [skip, setSkip] = useState(false);
  const [selectedChat, setSelectedChat] = useState("");
  const [selectedChatId, setSelectedChatId] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const { mutate } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}chat/id`;
    return mutationCallback(data, url);
  });

  const { mutate: mutateChat } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}chat/new`;
    return mutationCallback(data, url);
  });

  const { mutate: mutateUser } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}user`;
    return mutationCallback(data, url);
  });

  useEffect(() => {
    const pollingTimer = setInterval(() => {
      setSkip((prevSkip) => !prevSkip);
    }, 250);

    return () => clearInterval(pollingTimer);
  }, []);

  const handleSelectedChat = (activeChat: string): void => {
    setSelectedChat(activeChat);
  };

  const handleSelectedChatId = (activeChatId: string): void => {
    setSelectedChatId(activeChatId);
  };

  const handleFormOpen = () => {
    setFormOpen((prevFormOpen) => !prevFormOpen);
  };

  const addNewMessage = (newMessageId: string) => {
    const payload = {
      chatId: selectedChatId,
      messageId: newMessageId,
    };
    mutate(payload);
  };

  const handleFormSubmit = (chatId: string, users: string): void => {
    console.log(chatId, users);
    setFormOpen(false);
    const userList = users.split(",");
    const newChatId = Date.now().toString();
    const chatPayload = {
      id: newChatId,
      name: chatId,
      userId: userList,
      messages: [],
      type: "2",
    };
    userList.forEach((user) => {
      const userPayload = {
        chatId: newChatId,
        userId: user,
      };
      console.log(userPayload);
      mutateUser(userPayload);
    });
    mutateChat(chatPayload);
  };

  return (
    <div className="Body-container">
      <Sidepanel
        skip={skip}
        user={user}
        handleSelectedChat={handleSelectedChat}
        handleSelectedChatId={handleSelectedChatId}
        handleFormOpen={handleFormOpen}
      />
      <MessageContainer
        sender={user}
        activeChat={selectedChat}
        activeChatId={selectedChatId}
        skip={skip}
        addNewMessage={addNewMessage}
      />
      <NewChannelForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export { Body };
