import React from 'react';
import { useTaskContext } from '../components/TaskContext';
import TaskItem from '../components/TaskItem';

const ToDoTasks = () => {
  const { tasks } = useTaskContext();
  const toDoTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h2>To-Do Tasks</h2>
      <div className="row">
        {toDoTasks.length === 0 ? (
          <p>No to-do tasks yet.</p>
        ) : (
          toDoTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default ToDoTasks;
