import React, { useState } from "react";
import { useMutation } from "../../../../Hooks/useMutation";
import "./MessageBox.css";
const { ROOT_URL } = require("../../../../constants");

interface messageBoxProps {
  sender: string | null;
  addNewMessage: (message: string) => void;
}

type messageInformation = {
  id: string;
  senderId: string;
  content: string;
  timeStamp: string;
}

function MessageBox({ sender, addNewMessage }: messageBoxProps) {
  const [newMessage, setNewMessage] = useState("");
  const { mutate } = useMutation<messageInformation>(
    data => {
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const url = ROOT_URL + "message";
      return fetch(url, options);
    }
  );

  const handleNewMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = e.target;
    setNewMessage(value);
  };

  const handleSend = (): void => {
    const uniqueMessageId = Date.now().toString();
    const messagePayload ={
      id: uniqueMessageId,
      senderId: sender,
      content: newMessage,
      timeStamp: Date.now().toString(),
    }
    mutate(messagePayload);
    addNewMessage(uniqueMessageId);
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
      <button onClick={handleSend}> Send </button>
    </div>
  );
}

export { MessageBox };
