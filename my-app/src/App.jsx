import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ToDoTasks from './pages/ToDoTasks';
import CompletedTasks from './pages/CompletedTasks';
import AllTasks from './pages/AllTasks';
import { TaskProvider } from './components/TaskContext';
import { AuthProvider } from './login/AuthContext';
import ProtectedRoute from './login/ProtectedRoute'; // Protect routes for authenticated users
import './App.css'; // Import your CSS file

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/todo-tasks" element={<ToDoTasks />} />
              <Route path="/completed-tasks" element={<CompletedTasks />} />
              <Route path="/all-tasks" element={<AllTasks />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
