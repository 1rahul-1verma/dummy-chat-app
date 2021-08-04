import React, { useState } from "react";
import "./MessageBox.css";
const { ROOT_URL } = require("../../../../constants");

interface messageBoxProps {
  sender: string | null;
  addNewMessage: (message: string) => void;
}

function MessageBox({ sender, addNewMessage }: messageBoxProps) {
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = e.target;
    setNewMessage(value);
  };
  const handleSend = (): void => {
    const payload = JSON.stringify({
      id: "106",
      senderId: sender,
      content: newMessage,
      timeStamp: "1627976766521",
    });
    fetch(ROOT_URL + "message", {
      method: "POST",
      body: payload,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
            console.log("res");
        if (!res.ok) {
          throw new Error("Some Error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(newMessage, payload);
    addNewMessage("106");
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
