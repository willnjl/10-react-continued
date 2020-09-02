import React from "react";

export default function Password({ label, valid, handleChange, input }) {
  return (
    <form className="form-group" style={{ maxWidth: "24rem", margin: " auto" }}>
      <label htmlFor="password">{label}</label>
      <input
        value={input}
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
        className={`form-control ${valid ? null : "is-invalid"}`}
      />
    </form>
  );
}
