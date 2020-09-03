import React, { useState } from "react";

export default function ToggleText({ alternate, initial }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div onClick={handleClick} className="btn btn-success">
      {toggle ? alternate : initial}
    </div>
  );
}
