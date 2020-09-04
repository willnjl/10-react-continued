import React, { useState } from "react";

export default function Square({ color }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const style = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    backgroundColor: toggle ? color : "green",
  };
  return <div onClick={handleClick} style={style}></div>;
}

Square.defaultProps = {
  color: "hotpink",
};
