import React from "react";
import { useQuery } from "../../../../Hooks/useQuery";
import "./ChatOption.css";

interface chatOptionProps {
  chatId: string;
  handleSelectedChatId: (chatId: string) => void;
}
type chatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};
const ChatOption = React.memo(({ chatId, handleSelectedChatId }: chatOptionProps) => {
  const { data, loading } = useQuery<chatInformation>({
    url: `chat/id?chatId=${chatId}`,
    method: "GET",
  });
  const handleSelection = (data: chatInformation | undefined): void => {
    if (data) {
      handleSelectedChatId(data.id);
    }
  };
  return (
    <>
      {loading ? (
        <div> Loading... </div>
      ) : (
        <div
          className="chat-option-container"
          onClick={() => handleSelection(data)}
        >
          {data?.name}
        </div>
      )}
    </>
  );
});

export { ChatOption };
