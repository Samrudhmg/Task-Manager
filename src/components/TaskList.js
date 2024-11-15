import React from "react";
import TaskItem from "./TaskItem";
import "../App.css";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => (
  <div className="tasklist">
    <table>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            serialNumber={index + 1} // Pass serial number
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default TaskList;
