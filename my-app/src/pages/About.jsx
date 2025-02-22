import React from "react";
import "./About.css"; // Import custom CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Task Manager</h2>
      <p>This is a simple task manager application built with React.</p>
      <h3>Features</h3>
      <ul>
        <li>Create, update, and delete tasks</li>
        <li>Set task priorities and due dates</li>
        <li>Organize tasks by categories</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Bootstrap</li>
        <li>CSS Flexbox and Grid</li>
      </ul>
      <h3>How to Use</h3>
      <p>
        To get started, navigate to the "Tasks" page and start adding your tasks. You can set the priority, due date, and category for each task. Use the delete button to remove tasks that are no longer needed.
      </p>
    </div>
  );
};

export default About;