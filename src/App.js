import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Squares from "./components/01-Squares/Squares";
import SignUp from "./components/02-password/SignUp";
import Max from "./components/03-MaxCount/Max";

function App() {
  return (
    <div className="App">
      <Squares />
      <SignUp minimumLength={3} />
      <Max numbers={[0, 5, 10, 15]} max={25} />
    </div>
  );
}

export default App;
