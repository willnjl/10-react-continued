import React, { useReducer } from "react";

export default function Clicked() {
  const initialState = {
    clicked: false,
  };

  const reducer = (state, action) => {
    if (action.type === "click") {
      return {
        ...state,
        clicked: !state.clicked,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { clicked } = state;

  return (
    <button
      className={"btn btn-primary"}
      onClick={() => dispatch({ type: "click" })}
    >
      {clicked ? "true" : "false"}
    </button>
  );
}
