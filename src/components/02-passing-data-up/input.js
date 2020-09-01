import React from "react";

export default function input({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} />
    </>
  );
}
