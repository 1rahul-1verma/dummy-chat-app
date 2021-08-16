import React from "react";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";

const user = prompt("Enter name to join");
const UserContext = React.createContext<string | null>("");

function App() {
  return (
    <UserContext.Provider value={user}>
      <Header />
      <Body />
    </UserContext.Provider>
  );
}

export { App, UserContext };
