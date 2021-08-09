import React, { useState } from "react";
import { ROOT_URL } from "../../../constants";
import { useMutation } from "../../../Hooks/useMutation";
import { mutationCallback } from "../../Util/mutationCallback";
import "./NewChannelForm.css";

type newChannelFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type chatInformation = {
  id: string;
  name: string;
  userID: string[];
  messages: string[];
  type: string;
};

function NewChannelForm({ isOpen, onClose}: newChannelFormProps) {
  const [chatName, setChatName] = useState("");
  const [users, setUsers] = useState("");

  const { mutate: mutateChat } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}chat/new`;
    return mutationCallback(data, url);
  });

  const { mutate: mutateUser } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}user`;
    return mutationCallback(data, url);
  });

  const handleChatName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChatName(value);
  };

  const handleUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsers(value);
  };

  const createNewChannel = () => {
    onClose();
    const userList = users.split(",");
    const newChatId = Date.now().toString();
    const chatPayload = {
      id: newChatId,
      name: chatName,
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
  }
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
              onClick={createNewChannel}
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
