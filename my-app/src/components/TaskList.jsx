mport React, { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

// Default tasks
const initialTasks = [
  { id: 1, title: "Complete React Assignment", description: "Work on Iteration 1" },
  { id: 2, title: "Review PRs", description: "Check the pull requests on GitHub" },
  { id: 3, title: "Read Documentation", description: "Go through React 18 docs" },
  { id: 4, title: "Test UI Responsiveness", description: "Ensure design works on all screens" },
  { id: 5, title: "Push Code to GitHub", description: "Commit changes and push to repo" },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks); // State to manage tasks
  const [title, setTitle] = useState(""); // State for new task title
  const [description, setDescription] = useState(""); // State for new task description

  // Handler to add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>

      {/* Form to add new task */}
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Render task items */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;