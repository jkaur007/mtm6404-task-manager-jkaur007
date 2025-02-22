// src/components/TaskList.js
import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TaskList.css";  

const initialTasks = [
  { id: 1, title: "Complete React Assignment", description: "Work on Iteration 1", dueDate: "2025-02-25", priority: "High", category: "Work" },
  { id: 2, title: "Review PRs", description: "Check the pull requests on GitHub", dueDate: "2025-02-22", priority: "Medium", category: "Work" },
  { id: 3, title: "Read Documentation", description: "Go through React 18 docs", dueDate: "2025-02-23", priority: "Low", category: "Study" },
  { id: 4, title: "Test UI Responsiveness", description: "Ensure design works on all screens", dueDate: "2025-02-24", priority: "High", category: "Work" },
  { id: 5, title: "Push Code to GitHub", description: "Commit changes and push to repo", dueDate: "2025-02-21", priority: "Medium", category: "Work" },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
        dueDate,
        priority,
        category,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
      setCategory("General");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      
      <form onSubmit={addTask} className="add-task-form space-y-4 mb-6">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500"
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
<h2>Tasks need to be done</h2>
      <div className="task-list-container">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
