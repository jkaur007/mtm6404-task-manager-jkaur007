import React from "react";
import './TaskItem.css'; // Import custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusCircle } from 'lucide-react';
import { PRIORITIES, CATEGORIES } from '../constants/taskConstants';



const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item bg-light p-4 mb-4 rounded shadow-sm">
      <h3 className="h5 font-weight-bold mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-muted mb-1">Due: {task.dueDate}</p>
      <p className="text-muted mb-1">Priority: {task.priority}</p>
      <p className="text-muted mb-1">Category: {task.category}</p>
      <button
        onClick={() => onDelete(task.id)}
        className="btn btn-danger px-4 py-2 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
