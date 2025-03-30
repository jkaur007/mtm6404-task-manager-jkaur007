import React from 'react';
import TaskItem from '../components/TaskItem';
import { useTaskContext } from '../components/TaskContext';

const CompletedTasks = () => {
  const { completedTasks, deleteTask, toggleComplete } = useTaskContext();

  return (
    <div className="task-page">
      <h2>Completed Tasks</h2>
      {completedTasks.length > 0 ? (
        completedTasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        ))
      ) : (
        <p>No completed tasks yet! Keep going. 🚀</p>
      )}
    </div>
  );
};

export default CompletedTasks;
