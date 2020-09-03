import React, { useState } from "react";

export default function RollCall({ names }) {
  const [index, setIndex] = useState(0);

  let handleClickRight = () => setIndex(index + 1);
  let handleClickLeft = () => setIndex(index - 1);

  return (
    <div className="alert alert-info">
      <h1>{names[index % names.length]}</h1>
      <button onClick={handleClickLeft} className="btn btn-primary btn-sm">
        {"<"}
      </button>
      <button onClick={handleClickRight} className="btn btn-primary btn-sm">
        {">"}
      </button>
    </div>
  );
}
