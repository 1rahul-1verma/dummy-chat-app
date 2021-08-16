import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useQuery } from "../../Hooks/useQuery";
import "./Header.css";

interface userSubscriptions {
  id: string;
  name: string;
  directMessages: string[];
  channels: string[];
  avatar: string;
}
function Header() {
  const user = useContext(UserContext);
  const { data } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
  });
  return (
    <div className="header-container">
        <input className="search-box" placeholder="Search..." type="text" />
      
          <div className="user-name">
              <span> {data?.name } </span> 
              <img className="user-avatar" src={data?.avatar} alt="AVATAR" />
      </div>
    </div>
  );
}

export { Header };
