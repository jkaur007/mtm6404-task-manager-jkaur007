import React, { useState, useContext } from "react";
import { TaskContext } from "../components/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleCompletion, updateTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    updateTask(editedTask); // Update the task in context
    setIsEditing(false);
  };

  return (
    <div className="col-md-6 col-sm-12 mb-3">
      <div className="card shadow-sm p-3 rounded">
        {isEditing ? (
          <>
            <input
              className="form-control mb-2 form-control-sm"
              name="title"
              value={editedTask.title}
              onChange={handleEditChange}
            />
            <textarea
              className="form-control mb-2 form-control-sm"
              name="description"
              value={editedTask.description}
              onChange={handleEditChange}
            />
            <input
              type="date"
              className="form-control mb-2 form-control-sm"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={handleEditChange}
            />
            <select
              className="form-select mb-2 form-select-sm"
              name="priority"
              value={editedTask.priority}
              onChange={handleEditChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <input
              className="form-control mb-2 form-control-sm"
              name="category"
              value={editedTask.category}
              onChange={handleEditChange}
            />
            <button onClick={handleSave} className="btn btn-success btn-sm me-2">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary btn-sm">
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{task.title}</h5>
            <p>{task.description}</p>
            <p><strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Category:</strong> <span className="badge bg-info">{task.category}</span></p>

            <div className="d-flex gap-2">
              <button onClick={() => toggleCompletion(task.id)} className="btn btn-success btn-sm">
                {task.isCompleted ? "Undo" : "Complete"}
              </button>
              <button onClick={() => setIsEditing(true)} className="btn btn-warning btn-sm">
                Edit
              </button>
              <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
