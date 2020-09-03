import React, { useState } from "react";

export default function StepCounter({ initial, max, step }) {
  const [count, setCount] = useState(initial);

  const handleClickPlus = () => {
    let updatedCount = count + step;
    if (updatedCount <= max) {
      setCount(count + step);
    }
  };
  const handleClickMinus = () => {
    let updatedCount = count - step;
    if (updatedCount >= 0) {
      setCount(updatedCount);
    }
  };
  return (
    <div className="alert alert-warning">
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
