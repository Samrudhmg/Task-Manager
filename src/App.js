import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");

  const priorityLevels = { Low: 1, Medium: 2, High: 3 };


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
    if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
    if (sortOrder === "Low-High")
      return priorityLevels[a.priority] - priorityLevels[b.priority];
    if (sortOrder === "High-Low")
      return priorityLevels[b.priority] - priorityLevels[a.priority];
    return 0;
  });

  return (
    <div className="main">
      <div className="app-container">
        <h1>Task Manager</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskInput addTask={addTask} />
        <div className="sort-buttons">
          <button onClick={() => setSortOrder("A-Z")}>A - Z</button>
          <button onClick={() => setSortOrder("Z-A")}>Z - A</button>
          <button onClick={() => setSortOrder("Low-High")}>
            Priority: Low to High
          </button>
          <button onClick={() => setSortOrder("High-Low")}>
            Priority: High to Low
          </button>
        </div>
        <TaskList
          tasks={sortedTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
