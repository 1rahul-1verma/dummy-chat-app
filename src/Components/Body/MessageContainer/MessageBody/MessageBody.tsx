import React from 'react';
import { Message } from './Message/Message';
import "./MessageBody.css";

interface messageBodyProps {
    messages: string[] | undefined;
}

function MessageBody({ messages}: messageBodyProps) {
    return (
        <div className="messageBody-container">
            {messages && messages.map(message => {
                return (
                    <Message message={ message }/>
                )
            })}
        </div>
    )
}

export { MessageBody };
