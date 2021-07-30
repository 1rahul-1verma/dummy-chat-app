import React from "react";
import "./Applications.css";
const applicationList: string[] = ["Google Calender"];
function Application() {
  return (
    <div className="applications-container">
      Apps
      {applicationList.map((app) => {
        return <li className="app"> {app} </li>;
      })}
    </div>
  );
}

export default Application;
