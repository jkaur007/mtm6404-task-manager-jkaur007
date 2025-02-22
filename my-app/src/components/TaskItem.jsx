// src/components/TaskItem.js
import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item bg-gray-100 p-4 mb-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <p className="text-sm text-gray-500">Priority: {task.priority}</p>
      <p className="text-sm text-gray-500">Category: {task.category}</p>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
