import React, { useCallback } from "react";
import { Message } from "./Message/Message";
import { FixedSizeList } from "react-window";
import "./ChatBody.css";

interface messageBodyProps {
  sender: string | null;
  messages: string[] | undefined;
}

function ChatBody({ sender, messages }: messageBodyProps) {
  const Row = useCallback(
    ({ index, style }) => {
      const message = messages ? messages[index] : undefined;
      if (!message) {
        return (null);
      }
      return (
        <div style={style}>
          {!message? null : (
            <Message sender={sender} message={message} />
          )}
        </div>
      );
    },
    [messages, sender]
  );

  return (
    <div className="chat-body-container">
      <FixedSizeList
        height={1000}
        width={600}
        itemSize={150}
        itemCount={messages ? messages.length : 0}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}

export { ChatBody };
