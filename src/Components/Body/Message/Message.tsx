import React from 'react'
import { MessageBody } from './MessageBody/MessageBody';
import { MessageBox } from './MessageBox/MessageBox';
import { MessageHeader } from './MessageHeader/MessageHeader';
import "./Message.css";

function Message() {
    return (
        <div className="message-container">
            <MessageHeader />
            <MessageBody />
            <MessageBox />
        </div>
    )
}

export { Message };
