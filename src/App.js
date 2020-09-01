import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Squares from "./components/01-Squares/Squares";
import SignUp from "./components/02-password/SignUp";

function App() {
  return (
    <div className="App">
      <Squares />
      <SignUp minimumLength={3} />
    </div>
  );
}

export default App;
