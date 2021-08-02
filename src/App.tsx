import React from "react";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";

const user = prompt("Enter name to join");

function App() {
  return (
    <div>
      <Header user={ user }/>
      <Body user={ user}/>
    </div>
  );
}

export default App;
