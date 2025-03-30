import React from 'react';
import TaskItem from '../components/TaskItem';
import { useTaskContext } from '../components/TaskContext';

const ToDoTasks = () => {
  const { toDoTasks, deleteTask, toggleComplete } = useTaskContext();

  return (
    <div className="task-page">
      <h2>To-Do Tasks</h2>
      {toDoTasks.length > 0 ? (
        toDoTasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        ))
      ) : (
        <p>No tasks to do. Enjoy your day! 😊</p>
      )}
    </div>
  );
};

export default ToDoTasks;
