import React from "react";

export default function Counter({
  selected,
  value,
  handlePlus,
  handleSubtract,
}) {
  return (
    <div className={selected ? "alert alert-success" : "alert alert-warning"}>
      <p>{value}</p>

      <button className="btn btn-primary" onClick={handlePlus}>
        {" +1 "}
      </button>
      <button className="btn btn-primary" onClick={handleSubtract}>
        {" -1 "}
      </button>
    </div>
  );
}
