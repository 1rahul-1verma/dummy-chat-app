import React from "react";
import { useQuery } from "../../../../Hooks/useQuery";

interface chatOptionProps {
  chatId: string;
  handleSelectedChatId: (chatId: string) => void;
  handleSelectedChat: (chat: string) => void;
}
type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};
function ChatOption({
  chatId,
  handleSelectedChatId,
  handleSelectedChat,
}: chatOptionProps) {
  const { data, loading } = useQuery<chatInformation>({
    url: `chat/id?chatId=${chatId}`,
    method: "GET",
  });
  const handleSelection = (data: chatInformation | undefined): void => {
    if (data) {
      handleSelectedChat(data.name);
      handleSelectedChatId(data.id);
    }
  };
  return <div onClick={() => handleSelection(data)}>{data?.name}</div>;
}

export { ChatOption };
