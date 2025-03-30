import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './login/Dashboard';
import ProtectedRoute from './login/ProtectedRoute';
import { TaskProvider } from "./components/TaskContext";
import { AuthProvider } from './login/AuthContext';
import ToDoTasks from './pages/ToDoTasks';
import CompletedTasks from './pages/CompletedTasks';
import AllTasks from './pages/AllTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <div className="app-container">
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
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
