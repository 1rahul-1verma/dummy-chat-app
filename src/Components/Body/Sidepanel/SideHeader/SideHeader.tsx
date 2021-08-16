import React from 'react'
import "./SideHeader.css"

const ORG_NAME = "Sprinklr";
const SideHeader = React.memo(() => {
    return (
        <div className="side-header-container">
            {ORG_NAME}
        </div>
    )
});

export default SideHeader
