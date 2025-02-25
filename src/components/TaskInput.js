import React, { useState } from "react";
import "./input.css";

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
  };

  return (
    <div className="taskinput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
