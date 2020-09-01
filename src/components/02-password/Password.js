import React from "react";

export default function Password({ label, valid, handleChange }) {
  const style = {
    border: "2px solid red",
  };
  return (
    <div style={!valid ? style : null}>
      <label htmlFor="password">{label}</label>
      <input
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
