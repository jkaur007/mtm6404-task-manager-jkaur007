import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu} className={isActive("/")}>Home</Link></li>
        <li><Link to="/tasks" onClick={toggleMenu} className={isActive("/tasks")}>Tasks</Link></li>
        <li><Link to="/todo-tasks" onClick={toggleMenu} className={isActive("/todo-tasks")}>To-Do</Link></li>
        <li><Link to="/completed-tasks" onClick={toggleMenu} className={isActive("/completed-tasks")}>Completed</Link></li>
        <li><Link to="/login" onClick={toggleMenu} className={isActive("/login")}>Log In</Link></li>
        <li><Link to="/signup" onClick={toggleMenu} className={isActive("/signup")}>Sign Up</Link></li>
     
      </ul>
    </nav>
  );
};

export default Navbar;
