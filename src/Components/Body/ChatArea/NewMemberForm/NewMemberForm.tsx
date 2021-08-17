import React, { useState } from "react";
import { ROOT_URL } from "../../../../constants";
import { useMutation } from "../../../../Hooks/useMutation";
import { mutationCallback } from "../../../Util/mutationCallback";
import { NewMemberFormProp } from "../types/types";

const NewMemberForm = React.memo(({
  isFormOpen,
  chatId,
  handleFormClose,
}: NewMemberFormProp) => {
  const [user, setUser] = useState("");
  const { mutate: mutateChat } = useMutation((data) => {
    const url = `${ROOT_URL}chat/newUser`;
    return mutationCallback(data, url);
  });
  const { mutate: mutateUser } = useMutation((data) => {
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
});

export { NewMemberForm };
