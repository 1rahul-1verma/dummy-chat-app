import React, { useState } from "react";
import "./NewChannelForm.css";

type newChannelFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (chat: string, user: string) => void;
};
function NewChannelForm({ isOpen, onClose, onSubmit }: newChannelFormProps) {
  const [chatName, setChatName] = useState("");
  const [users, setUsers] = useState("");

  const handleChatName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChatName(value);
  };

  const handleUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsers(value);
  };
  return (
    <>
      {!isOpen ? null : (
        <div className="overlay">
          <div className="form">
            <h2>Create a channel</h2>
            <label className="form-label"> Name </label>
            <input
              className="form-input"
              placeholder="Channel-Name"
              value={chatName}
              onChange={ (e) => handleChatName(e)}
              name="name"
              required
            />
            <label className="form-label"> Members </label>
            <input
              className="form-input"
              placeholder="Members-List"
              value={users}
              onChange={(e) => handleUsers(e)}
              required
            />
            <button className="form-button-close" onClick={onClose}>
              X
            </button>
            <button
              className="form-button-create"
              onClick={() => onSubmit(chatName, users)}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { NewChannelForm };
