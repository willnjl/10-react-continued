import React, { useState } from "react";

export default function List() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => setInput(e.currentTarget.value);
  const handleClick = (e) => {
    setTasks([...tasks, input]);
  };
  return (
    <div className={"container mt-4 border d-flex flex-column"}>
      <ul className={"list-group"}>
        {tasks.map((task) => (
          <li className={"list-group-item"}>{task}</li>
        ))}
      </ul>
      <label htmlFor={"task"}>Task</label>
      <input
        onChange={handleChange}
        type={"text"}
        className={"form-group-item"}
        name={"task"}
      />
      <button onClick={handleClick} className={"btn btn-primary"}>
        Add Task
      </button>
    </div>
  );
}
