import React from 'react';
import { useTaskContext } from '../components/TaskContext';
import TaskItem from '../components/TaskItem';

const CompletedTasks = () => {
  const { tasks } = useTaskContext();
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      <div className="row">
        {completedTasks.length === 0 ? (
          <p>No completed tasks yet.</p>
        ) : (
          completedTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
