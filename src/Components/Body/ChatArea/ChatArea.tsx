import React, { useContext } from "react";
import { ChatBody } from "./ChatBody/ChatBody";
import { MessageBox } from "./MessageBox/MessageBox";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { useQuery } from "../../../Hooks/useQuery";
import { UserContext } from "../../../App";
import { NewMemberForm } from "./NewMemberForm/NewMemberForm";
import { useModal } from "../../../Hooks/useModal";
import "./ChatArea.css";

interface chatAreaProps {
  activeChatId: string;
}

type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

const ChatArea = ({ activeChatId }: chatAreaProps) => {
  const sender = useContext(UserContext);
  const { data } = useQuery<chatInformation>({
    url: `chat/id?chatId=${activeChatId}`,
    method: "GET",
    interval: true
  });

  const {
    isModalOpen: isNewMemberFormOpen,
    toggleModalState: toggleNewMemberForm,
  } = useModal();

  const messageList = data?.messages ? [...data?.messages] : [];
  messageList.reverse();

  return (
    <div className="chat-area">
      <ChatHeader
        activeChat={data?.name}
        type={data?.type}
        handleFormOpen={toggleNewMemberForm}
      />

      <ChatBody sender={sender} messages={messageList} />

      <MessageBox sender={sender} activeChatId={activeChatId} />

      <NewMemberForm
        chatId={activeChatId}
        isFormOpen={isNewMemberFormOpen}
        handleFormClose={toggleNewMemberForm}
      />
    </div>
  );
};

export { ChatArea };
