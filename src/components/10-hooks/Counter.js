import React, { useState } from "react";

export default function Counter({ initial, max }) {
  const [count, setCount] = useState(initial);

  const handleClickPlus = () => {
    let updatedCount = count + 1;
    if (updatedCount <= max) {
      setCount(count + 1);
    }
  };
  const handleClickMinus = () => {
    let updatedCount = count - 1;
    if (updatedCount >= 0) {
      setCount(updatedCount);
    }
  };
  return (
    <div className="alert alert-info">
      <p>{count}</p>
      <button onClick={handleClickPlus} className="btn btn-primary">
        {"+"}
      </button>
      <button onClick={handleClickMinus} className="btn btn-dark">
        {"-"}
      </button>
    </div>
  );
}
