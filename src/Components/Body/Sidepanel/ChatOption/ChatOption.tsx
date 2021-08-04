import React from 'react'
import { useQuery } from '../../../../Hooks/useQuery';

interface chatOptionProps {
    chatId: string;
    handleSelectedChatId : (chatId: string) => void;
    handleSelectedChat: (chat: string) => void;
    handleChatMessages: (message: string[]) => void;
}
type chatInformation = {
    id: string,
    name: string,
    userId: string[],
    messages: string[],
    type: string,
}
function ChatOption({ chatId, handleSelectedChatId, handleSelectedChat, handleChatMessages }: chatOptionProps) {
    const { data, loading } = useQuery<chatInformation>({
    url: `chat/id?chatId=${chatId}`,
    method: "GET",
    });
    console.log(data, "chatInfo");
    const handleSelection = (data: chatInformation | undefined): void => {
        console.log("data", data);
        if (data) {
            handleSelectedChat(data.name);
            handleSelectedChatId(data.id);
            handleChatMessages(data.messages);
        }
    }
    return (
        <div onClick={ () => handleSelection(data)}>
            {/* { console.log(data)} */}
            { data?.name }
        </div>
    )
}

export { ChatOption };
