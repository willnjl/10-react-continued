import React from "react";

export default function Square({ name, color, handleClick, selected }) {
  const style = {
    boxSizing: "border-box",
    width: "200px",
    height: "200px",
    display: "inline-block",
    border: "10px solid black",
    backgroundColor: selected ? color : "blue",
  };
  return (
    <div style={style} onClick={handleClick}>
      <h1 style={{ color: "white" }}> {name} </h1>
    </div>
  );
}
