import React from "react";
import "./Applications.css";

interface applicationProps {
  applications: string[];
  handleSelectedChat: (chat: String) => void;
}

function Application({ applications, handleSelectedChat }: applicationProps) {
  return (
    <div className="applications-container">
      Apps
      {applications.map((app, indx) => (
        <div
          key={indx}
          className="app"
          onClick={(e) => handleSelectedChat(e.currentTarget.innerText)}
        >
          {app}
        </div>
      ))}
    </div>
  );
}

export default Application;
