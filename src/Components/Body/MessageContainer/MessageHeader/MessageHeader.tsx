import React from 'react'
import "./MessageHeader.css"

interface messageHeaderProps {
    activeChat: string | undefined;
}
function MessageHeader({ activeChat }: messageHeaderProps) {
    return (
        <div className = "message-header-container">
            {activeChat}
        </div>
    )
}

export { MessageHeader };
