import React from "react";
import { useQuery } from "../../../../Hooks/useQuery";
import { ChatOptionProps, ChatInformation } from "../types/types";
import "./ChatOption.css";

const ChatOption = React.memo(({ chatId, handleSelectedChatId }: ChatOptionProps) => {
  const { data, loading } = useQuery<ChatInformation>({
    url: `chat/id?chatId=${chatId}`,
    method: "GET",
  });
  const handleSelection = (id: string | undefined): void => {
      handleSelectedChatId(id);
  };

  return (
    <>
      {loading ? (
        <div> Loading... </div>
      ) : (
        <div
          className="chat-option-container"
          onClick={() => handleSelection(data?.id)}
        >
          {data?.name}
        </div>
      )}
    </>
  );
});

export { ChatOption };
