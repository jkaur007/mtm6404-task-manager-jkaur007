// AppContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const AppContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
  // State for lists (pulled from localStorage initially)
  const [lists, setLists] = useState(() => {
    try {
      const savedLists = localStorage.getItem('lists');
      return savedLists ? JSON.parse(savedLists) : [];
    } catch (error) {
      console.error('Failed to parse lists from localStorage:', error);
      return [];
    }
  });

  // Persist data in localStorage whenever lists change
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  // Add logging to debug state changes
  useEffect(() => {
    console.log('Lists updated:', lists);
  }, [lists]);

  // Add a new list
  const addList = (name) => {
    console.log('Adding list:', name);
    const newList = { id: Date.now(), name, items: [] };
    setLists([...lists, newList]);
  };

  // Delete a list
  const deleteList = (id) => {
    console.log('Deleting list with id:', id);
    setLists(lists.filter((list) => list.id !== id));
  };

  // Add item to a list
  const addItem = (listId, task, priority) => {
    console.log('Adding item to list:', { listId, task, priority });
    const updatedLists = lists.map((list) => 
      list.id === listId
        ? { ...list, items: [...list.items, { id: Date.now(), task, priority, completed: false }] }
        : list
    );
    setLists(updatedLists);
  };

  // Toggle item completion
  const toggleItem = (listId, itemId) => {
    console.log('Toggling item completion:', { listId, itemId });
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? { ...list, items: list.items.map((item) => 
            item.id === itemId ? { ...item, completed: !item.completed } : item
          ) }
        : list
    );
    setLists(updatedLists);
  };

  // Delete item from a list
  const deleteItem = (listId, itemId) => {
    console.log('Deleting item from list:', { listId, itemId });
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? { ...list, items: list.items.filter((item) => item.id !== itemId) }
        : list
    );
    setLists(updatedLists);
  };

