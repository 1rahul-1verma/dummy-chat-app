import React, { useState } from "react";
import "./Body.css";
import { Sidepanel } from "./Sidepanel/Sidepanel";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { useQuery } from "../../Hooks/useQuery";


interface bodyProps {
  user: string | null;
}
interface userSubscriptions {
  id: string;
  name: string;
  directMessages: string[];
  channels: string[];
}
function Body({ user }: bodyProps) {
  const { data, loading } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
  });

  const [selectedChat, setSelectedChat] = useState("");
  const [selectedChatId, setSelectedChatId] = useState("");
  const [messages, setMessages] = useState<string[]>();

  const handleSelectedChat = (activeChat: string): void => {
    console.log("here.....");
    setSelectedChat(activeChat);
  };
  
  const handleSelectedChatId = (activeChatId: string): void => {
    console.log("here.....");
    setSelectedChatId(activeChatId);
  }

  const handleChatMessages = (curMessages: string[]): void => {
    console.log(curMessages);
    setMessages(curMessages);
  }

  const addNewMessage = (newMessage: string): void => {
    if (messages) {
      setMessages([...messages, newMessage]);

    } else {
      setMessages([newMessage]);
    }
  }
  return (
    <div className="Body-container">
      {!loading && (
        <>
          <Sidepanel
            channels={data ? data.channels : []}
            friends={data ? data.directMessages : []}
            handleSelectedChat={handleSelectedChat}
            handleSelectedChatId={handleSelectedChatId}
            handleChatMessages={ handleChatMessages}
          />
          <MessageContainer sender={ user}activeChat={selectedChat} activeChatId={selectedChatId} messages={messages} addNewMessage={ addNewMessage}/>
        </>
      )}
    </div>
  );
}

export { Body };
