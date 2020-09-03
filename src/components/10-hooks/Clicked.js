import React, { useState } from "react";

export default function Clicked() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <button className="btn btn-dark" onClick={handleClick}>
      {count}
    </button>
  );
}
