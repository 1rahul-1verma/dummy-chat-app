import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useQuery } from "../../Hooks/useQuery";
import { userSubscriptions } from "./types/types";
import "./Header.css";


function Header() {
  const user = useContext(UserContext);
  const { data, loading } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
  });
  return (
    <div className="header-container">
      <input className="search-box" placeholder="Search..." type="text" />

      <div className="user">
        {loading || !data ? (
          <>
            <div className="user-name"> Loading... </div>
            <div className="loading-user-avatar"> </div>
          </>
        ) : (
          <>
            <div className="user-name"> {data.name} </div>
            <img className="user-avatar" src={data.avatar} alt="AVATAR" />
          </>
        )}
      </div>
    </div>
  );
}

export { Header };
