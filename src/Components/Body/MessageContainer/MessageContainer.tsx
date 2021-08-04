import React from 'react'
import { MessageBody } from './MessageBody/MessageBody';
import { MessageBox } from './MessageBox/MessageBox';
import { MessageHeader } from './MessageHeader/MessageHeader';
import "./MessageContainer.css";

interface messageProps {
    sender: string | null;
    activeChat: string;
    activeChatId: string;
    messages: string[] | undefined;
    addNewMessage: (newMessage: string) => void;
}
function MessageContainer({ activeChat, activeChatId, messages, addNewMessage, sender }: messageProps) {
    
    return (
        <div className="message-container">
            <MessageHeader activeChat={ activeChat}/>
            <MessageBody messages={ messages}/>
            <MessageBox sender= { sender}addNewMessage={ addNewMessage}/>
        </div>
    )
}

export { MessageContainer };
