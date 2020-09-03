import React from "react";

export default function Tags({ tags }) {
  return tags.map((tag) => (
    <div className="btn btn-dark btn-sm mr-0" style={{ margin: "1rem" }}>
      {tag}
    </div>
  ));
}
