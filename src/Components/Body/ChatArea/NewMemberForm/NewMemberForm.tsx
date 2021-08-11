import React, { useState } from "react";
import { ROOT_URL } from "../../../../constants";
import { useMutation } from "../../../../Hooks/useMutation";
import { mutationCallback } from "../../../Util/mutationCallback";

interface newMemberFormProp {
  isFormOpen: boolean;
  chatId: string;
  handleFormClose: () => void;
}

type chatInformation = {
  id: string;
  name: string;
  userID: string[];
  messages: string[];
  type: string;
};

function NewMemberForm({
  isFormOpen,
  chatId,
  handleFormClose,
}: newMemberFormProp) {
  const [user, setUser] = useState("");
  const { mutate: mutateChat } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}chat/newUser`;
    return mutationCallback(data, url);
  });
  const { mutate: mutateUser } = useMutation<chatInformation>((data) => {
    const url = `${ROOT_URL}user`;
    return mutationCallback(data, url);
  });
  const handleUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser(value);
  };
  const addNewMember = () => {
    handleFormClose();
    const newMemberPayload = {
      chatId: chatId,
      userId: user,
    };
    mutateChat(newMemberPayload);
    mutateUser(newMemberPayload);
  };

  return (
    <>
      {isFormOpen && (
        <div className="overlay">
          <div className="form">
            <h2>Add new member!</h2>
            <label className="form-label"> New Member </label>
            <input
              className="form-input"
              value={user}
              placeholder="New Member"
              onChange={handleUsers}
              required
            />
            <button className="form-button-close" onClick={handleFormClose}>
              X
            </button>
            <button className="form-button-create" onClick={addNewMember}>
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { NewMemberForm };
