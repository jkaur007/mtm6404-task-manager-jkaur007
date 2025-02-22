import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>

      <p>Welcome to the Task Manager application!

      </p>
      <h2>Key Features</h2>
<ul>
  <li>Track your daily, weekly, and long-term tasks</li>
  <li>Set due dates and reminders</li>
  <li>Prioritize tasks based on urgency</li>
  <li>Mark completed tasks to stay on top of your productivity</li>
  <li>View all tasks in an easy-to-read list or calendar format</li>
</ul>
<h2>How It Works</h2>
<ol>
  <li>Create an account or sign in to access your task list</li>
  <li>Add your tasks, set due dates, and assign priorities</li>
  <li>Mark tasks as complete once done</li>
  <li>Keep track of your progress and stay organized!</li>
</ol>

    </div>
  );
};

export default Home;