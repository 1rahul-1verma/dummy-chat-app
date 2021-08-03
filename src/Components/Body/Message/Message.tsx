import React from 'react'
import { MessageBody } from './MessageBody/MessageBody';
import { MessageBox } from './MessageBox/MessageBox';
import { MessageHeader } from './MessageHeader/MessageHeader';
import "./Message.css";

interface messageProps {
    activeChat: String;
}
function Message({ activeChat }: messageProps) {
    return (
        <div className="message-container">
            <MessageHeader activeChat={ activeChat}/>
            <MessageBody />
            <MessageBox />
        </div>
    )
}

export { Message };
