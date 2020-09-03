import React from "react";
import axios from "./axios";

export default function DeleteTag({ articleId }) {
  return (
    <button
      style={{ margin: "1rem" }}
      className="btn btn-danger btn-sm"
      onClick={() => {
        axios.delete(`/blog/articles/${articleId}`).then(() => {
          console.log("deleted");
        });
      }}
    >
      {"Delete"}
    </button>
  );
}
