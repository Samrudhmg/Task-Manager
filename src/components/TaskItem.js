import React from "react";
import "../App.css";

const TaskItem = ({ task, deleteTask, toggleComplete, serialNumber }) => (
  <tr
    className="task-item"
    style={{ cursor: "pointer" }}
    onClick={() => toggleComplete(task.id)}
  >
    <td style={{ padding: "8px", textAlign: "center" }}>{serialNumber}</td>
    <td
      style={{
        padding: "10px",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {task.title}
    </td>
    <td
      style={{
        padding: "8px",
        textAlign: "center",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {task.priority}
    </td>
    <td style={{ padding: "8px", textAlign: "center" }}>
      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default TaskItem;
