import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TaskList.css";
import { useTaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleComplete } = useTaskContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const [showCompleted, setShowCompleted] = useState(true);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask({
        title,
        description,
        dueDate,
        priority,
        category,
      });
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
      setCategory("General");
    }
  };

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className="task-list max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      <form onSubmit={handleAddTask} className="add-task-form space-y-4 mb-6">
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
      <Button onClick={() => setShowCompleted(!showCompleted)} className="mb-4">
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </Button>

      <div className="task-list-container">
        {sortedTasks.filter(task => showCompleted || !task.completed).map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
