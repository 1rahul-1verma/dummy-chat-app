import React from 'react'
import "./MessageBox.css"
function MessageBox() {
    return (
        <div className="messagebox-container">
            <textarea className = "messagebox-input" placeholder="Type Message..."/>
        </div>
    )
}

export { MessageBox };
