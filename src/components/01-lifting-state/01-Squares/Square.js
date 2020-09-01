import React from "react";

export default function Square({ name, color, handleClick, selected }) {
  const style = {
    width: "200px",
    height: "200px",
    backgroundColor: selected ? color : "blue",
  };
  return (
    <div style={style} onClick={handleClick}>
      <h1> {name} </h1>
    </div>
  );
}
