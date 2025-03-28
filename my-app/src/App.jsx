import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
 // Task Management Provider
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './login/AuthContext.jsx';
import Login from './login/Login.jsx';
import Signup from './login/Signup.jsx';
import Dashboard from './login/Dashboard.jsx';
// Dashboard component
import ProtectedRoute from './login/ProtectedRoute.jsx'; // Protected Route component

function App() {
  return (
    <AuthProvider> {/* Wrap everything with AuthProvider */}
     {/* Ensures tasks are managed properly */}
        <Router>
          <div className="app-container">
            <Navbar />
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Route for Dashboard */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
     
    </AuthProvider>
  );
}

export default App;
