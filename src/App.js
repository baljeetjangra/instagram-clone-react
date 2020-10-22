import React from "react";
import "./App.css";
import instagram from "./assets/instagram.png";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={instagram} alt="" />
      </div>
    </div>
  );
}

export default App;
