import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed);
  const toDoTasks = tasks.filter(task => !task.completed);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete, completedTasks, toDoTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
