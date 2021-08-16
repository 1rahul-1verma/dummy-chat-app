import React, { useContext, useState, useEffect } from "react";
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
  const [messageList, setMessageList] = useState<string[]>([]);
  
  const { data } = useQuery<chatInformation>({
    url: `chat/id?chatId=${activeChatId}`,
    method: "GET",
  });

  const { data: prevMessages } = useQuery<string[]>({
    url: `chat/page?chatId=${activeChatId}&lastMessage=${
      messageList.length ? messageList[messageList.length - 1] : 0
    }`,
    method: "GET",
    skip: false
  });

  const { data: newMessages} = useQuery<string[]>({
    url: `chat/chatAfter?chatId=${activeChatId}&lastMessage=${
      messageList?.length ? messageList[0] : -1
    }`,
    method: "GET",
    skip: false,
    interval: true
  });

  useEffect(() => {
    const messages = data?.messages ? [...data?.messages] : [];
    messages.reverse();
    setMessageList(messages);
  }, [data]);

  useEffect(() => {
    if (!newMessages) {
      return;
    }
    console.log("here");
    setMessageList(prevMessagesList => [...newMessages, ...prevMessagesList]);
  }, [newMessages]);

  const {
    isModalOpen: isNewMemberFormOpen,
    toggleModalState: toggleNewMemberForm,
  } = useModal();


  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0) {
      const messages = prevMessages ? [...prevMessages] : [];
      messages.reverse();
      setMessageList(prevMessagesList => [...prevMessagesList, ...messages]);
    }
  };

  return (
    <div className="chat-area">
      <ChatHeader
        activeChat={data?.name}
        type={data?.type}
        handleFormOpen={toggleNewMemberForm}
      />
      <ChatBody
        sender={sender}
        messages={messageList}
        onScroll={handleScroll}
      />

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
