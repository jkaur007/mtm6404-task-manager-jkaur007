import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const tasks = [
  { id: 1, title: "Complete React Assignment", description: "Work on Iteration 1" },
  { id: 2, title: "Review PRs", description: "Check the pull requests on GitHub" },
  { id: 3, title: "Read Documentation", description: "Go through React 18 docs" },
  { id: 4, title: "Test UI Responsiveness", description: "Ensure design works on all screens" },
  { id: 5, title: "Push Code to GitHub", description: "Commit changes and push to repo" },
];

const TaskList = () => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
