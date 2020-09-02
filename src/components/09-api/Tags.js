import React from "react";

export default function Tags({ tagName }) {
  return (
    <div className="btn btn-dark" style={{ margin: "1rem" }}>
      {tagName}
    </div>
  );
}
