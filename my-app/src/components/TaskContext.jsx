import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase'; // Firestore setup
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, onSnapshot } from 'firebase/firestore';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(updatedTasks);
    });
    return () => unsubscribe();
  }, []);

  const addTask = async (task) => {
    await addDoc(collection(db, 'tasks'), {
      ...task,
      completed: false,
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  const toggleCompletion = async (id) => {
    const taskRef = doc(db, 'tasks', id);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      await updateDoc(taskRef, { completed: !task.completed });
    }
  };

  const editTask = async (id, updatedData) => {
    const taskRef = doc(db, 'tasks', id);
    await updateDoc(taskRef, updatedData);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleCompletion, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
