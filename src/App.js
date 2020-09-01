import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Squares from "./components/01-lifting-state/01-Squares/Squares";
import SignUp from "./components/01-lifting-state/02-password/SignUp";
import Max from "./components/01-lifting-state/03-MaxCount/Max";
import Button from "./components/02-passing-data-up/Button";

function App() {
  return (
    <div className="App">
      <Squares />
      <SignUp minimumLength={3} />
      <Max numbers={[0, 5, 10, 15]} max={25} />
      <Button handleUpdate={(count) => console.log(count)} />
    </div>
  );
}

export default App;
