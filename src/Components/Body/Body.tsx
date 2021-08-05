import React, { useState } from "react";
import "./Body.css";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { useQuery } from "../../Hooks/useQuery";
import { useMutation } from "../../Hooks/useMutation";
import { ROOT_URL } from "../../constants";

interface bodyProps {
  user: string | null;
}
interface userSubscriptions {
  id: string;
  name: string;
  directMessages: string[];
  channels: string[];
}
type chatInformation = {
  id: string;
  name: string;
  userID: string[];
  messages: string[];
  type: string;
};
function Body({ user }: bodyProps) {
  const { data, loading } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
  });

  const [selectedChat, setSelectedChat] = useState("");
  const [selectedChatId, setSelectedChatId] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const { mutate } = useMutation<chatInformation>((data) => {
    console.log(newMessage, "before post call");
    const url = `${ROOT_URL}chat/id`;
    console.log(`${ROOT_URL}chat/id`);
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options);
  });

  const handleSelectedChat = (activeChat: string): void => {
    setSelectedChat(activeChat);
  };

  const handleSelectedChatId = (activeChatId: string): void => {
    setSelectedChatId(activeChatId);
  };

  const handleChatMessages = (curMessages: string[]): void => {
    setMessages(curMessages);
  };

  const addNewMessage = (newMessageId: string) => {
    const payload = {
      chatId: selectedChatId,
      messageId: newMessageId,
    };
    mutate(payload);
    setMessages((prevMessages) => {
      console.log([...prevMessages, newMessage],newMessage, "inside setMessages");
      return [...prevMessages, newMessage];
    });
    setNewMessage(newMessageId);
    console.log(messages, "added new message");
  };

  return (
    <div className="Body-container">
      {!loading && (
        <>
          <Sidepanel
            channels={data ? data.channels : []}
            friends={data ? data.directMessages : []}
            handleSelectedChat={handleSelectedChat}
            handleSelectedChatId={handleSelectedChatId}
            handleChatMessages={handleChatMessages}
          />
          <MessageContainer
            sender={user}
            activeChat={selectedChat}
            activeChatId={selectedChatId}
            messages={messages}
            addNewMessage={addNewMessage}
          />
        </>
      )}
    </div>
  );
}

export { Body };
