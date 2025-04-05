import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, addTask } = useTaskContext();
  const [form, setForm] = useState({
    title: '', description: '', dueDate: '', priority: 'Medium', category: 'General'
  });
  const [showCompleted, setShowCompleted] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      addTask(form);
      setForm({ title: '', description: '', dueDate: '', priority: 'Medium', category: 'General' });
    }
  };

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  const grouped = sortedTasks.reduce((acc, task) => {
    acc[task.category] = acc[task.category] || [];
    acc[task.category].push(task);
    return acc;
  }, {});

  return (
    <>
      <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow">
        <h4>Add Task</h4>
        <input className="form-control mb-2" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea className="form-control mb-2" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input type="date" className="form-control mb-2" name="dueDate" value={form.dueDate} onChange={handleChange} />
        <select className="form-select mb-2" name="priority" value={form.priority} onChange={handleChange}>
          <option>High</option><option>Medium</option><option>Low</option>
        </select>
        <input className="form-control mb-3" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <button className="btn btn-primary">Add Task</button>
      </form>

      <button className="btn btn-outline-secondary mb-3" onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </button>

      {Object.entries(grouped).map(([category, catTasks]) => (
        <div key={category}>
          <h5 className="text-decoration-underline mb-3">Category: <span className="badge bg-dark">{category}</span></h5>
          <div className="row">
            {catTasks
              .filter(task => showCompleted || !task.isCompleted)
              .map(task => <TaskItem key={task.id} task={task} />)}
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;
