import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
