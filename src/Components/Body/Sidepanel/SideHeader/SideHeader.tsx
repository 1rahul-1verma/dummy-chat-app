import React from 'react'
import "./SideHeader.css"

const ORG_NAME = "Sprinklr";
function SideHeader() {
    return (
        <div className = "header-container">
            { ORG_NAME }
        </div>
    )
}

export default SideHeader
