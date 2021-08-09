import React, { useState } from "react";
import { useMutation } from "../../../../Hooks/useMutation";
import { mutationCallback } from "../../../Util/mutationCallback";
import "./MessageBox.css";

const { ROOT_URL } = require("../../../../constants");

interface messageBoxProps {
  sender: string | null;
  activeChatId: string;
}

type messageInformation = {
  id: string;
  senderId: string;
  content: string;
  timeStamp: string;
}

type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

function MessageBox({ sender, activeChatId }: messageBoxProps) {
  const [newMessage, setNewMessage] = useState("");

  const { mutate: mutateMessage } = useMutation<messageInformation>((data) => {
    const url = `${ROOT_URL}message`;
    return mutationCallback(data, url);
  });

  const { mutate: mutateChat } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}chat/id`;
    return mutationCallback(data, url);
  });

  const handleNewMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = e.target;
    setNewMessage(value);
  };

  const handleMessageSend = (): void => {
    const uniqueMessageId = Date.now().toString();
    const messagePayload ={
      id: uniqueMessageId,
      senderId: sender,
      content: newMessage,
      timeStamp: Date.now().toString(),
    }
    mutateMessage(messagePayload);

    const chatPayload = {
      chatId: activeChatId,
      messageId: uniqueMessageId,
    };
    mutateChat(chatPayload);
    setNewMessage("");
  };

  return (
    <div className="messageBox-container">
      <textarea
        className="messageBox-input"
        placeholder="Type Message..."
        value={newMessage}
        onChange={handleNewMessage}
      />
      <button className="message-box-button" onClick={handleMessageSend}> Send </button>
    </div>
  );
}

export { MessageBox };