import React, { useContext, useState } from "react";
import { MessageBody } from "./MessageBody/MessageBody";
import { MessageBox } from "./MessageBox/MessageBox";
import { MessageHeader } from "./MessageHeader/MessageHeader";
import { useQuery } from "../../../Hooks/useQuery";
import { UserContext } from "../../../App";
import "./MessageContainer.css";
import { NewMemberForm } from "./NewMemberForm/NewMemberForm";

interface messageProps {
  activeChatId: string;
  skip: boolean;
}

type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

function MessageContainer({ activeChatId, skip }: messageProps) {
  const sender = useContext(UserContext);
  const { data } = useQuery<chatInformation>({
    url: `chat/id?chatId=${activeChatId}`,
    method: "GET",
    skip: skip,
  });
  const [newMemberForm, setNewMemberForm] = useState(false);
  const handleFormClose = () => {
    console.log("form Close");
    setNewMemberForm(false);
  };
  const handleFormOpen = () => {
    setNewMemberForm(true);
  };
  const messageList = data?.messages ? [...data?.messages] : [];
  messageList.reverse();
  return (
    <div className="message-container">
      <MessageHeader
        activeChat={data?.name}
        type={data?.type}
        handleFormOpen={handleFormOpen}
      />
      <MessageBody sender={sender} messages={messageList} />
      <MessageBox sender={sender} activeChatId={activeChatId} />
      {newMemberForm && (
        <NewMemberForm
          chatId={activeChatId}
          isFormOpen={newMemberForm}
          handleFormClose={handleFormClose}
        />
      )}
    </div>
  );
}

export { MessageContainer };
