import React from 'react';
import TaskItem from '../components/TaskItem';
import { useTaskContext } from '../components/TaskContext';

const AllTasks = () => {
  const { tasks, deleteTask, toggleComplete } = useTaskContext();

  return (
    <div className="task-page">
      <h2>All Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        ))
      ) : (
        <p>Your task list is empty! Add some tasks to get started. 📋</p>
      )}
    </div>
  );
};

export default AllTasks;
