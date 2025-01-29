import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

const tasks = [
  { id: 1, title: 'Complete React Assignment', description: 'Work on Iteration 1' },
  { id: 2, title: 'Fix Bugs', description: 'Debug the codebase' },
  { id: 3, title: 'Design UI', description: 'Make the app more intuitive' },
  { id: 4, title: 'Write Documentation', description: 'Update the README' },
  { id: 5, title: 'Submit Project', description: 'Push to GitHub' },
];

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
      </header>
      <Navbar />
      <main>
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
