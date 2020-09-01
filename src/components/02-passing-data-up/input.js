import React from "react";

export default function Input({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className="form-control form-control-sm" name={name} type={type} />
    </>
  );
}
