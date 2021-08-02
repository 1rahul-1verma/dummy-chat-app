import React from "react";
import "./Applications.css";

interface applicationProps {
  applications: string[];
  handleSelectedChat: (chat: String) => void;
}

function Application({ applications, handleSelectedChat }: applicationProps) {

  function handleClickChange(e: React.MouseEvent<HTMLElement>) {
      handleSelectedChat(e.currentTarget.innerText);
    }
  
  return (
    <div className="applications-container">
      Apps
      {applications.map((app, indx) => {
        return <div key={indx} className="app" onClick={ (e) => handleClickChange(e) }> {app} </div>;
      })}
    </div>
  );
}

export default Application;
