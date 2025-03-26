import React from "react";
import './TaskItem.css'; // Import custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusCircle } from 'lucide-react';
import { PRIORITIES, CATEGORIES, PRIORITY_COLORS } from '../constants/taskConstants';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  const priorityColor = PRIORITY_COLORS[task.priority] || 'gray'; // Default to gray if priority is not found
  const categoryLabel = CATEGORIES[task.category.toUpperCase()] || 'General'; // Ensure we use valid category

  return (
    <div className={`task-item bg-light p-4 mb-4 rounded shadow-sm ${task.completed ? 'completed' : ''}`}>
      <h3 className="h5 font-weight-bold mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-muted mb-1">Due: {task.dueDate}</p>
      
      {/* Priority with Color */}
      <p className="text-muted mb-1" style={{ color: priorityColor }}>
        Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} {/* Capitalize priority */}
      </p>
      
      {/* Category Label */}
      <p className="text-muted mb-1">
        Category: <span className="badge" style={{ backgroundColor: '#f1f1f1', color: '#333' }}>
          {categoryLabel}
        </span>
      </p>
      
      {/* Task Status */}
      <p className="text-muted mb-1">Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      
      {/* Mark Complete Button */}
      <button
        onClick={() => onToggleComplete(task.id)}
        className={`btn px-4 py-2 mt-2 ${task.completed ? 'btn-warning' : 'btn-success'}`}
      >
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="btn btn-danger px-4 py-2 mt-2 ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
