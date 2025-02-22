import React from "react";

const TaskStatus = ({ completed }) => {
  return (
    <div>
        {completed ? <p style={{ color: "green" }}>Completed</p> : <p style={{ color: "red" }}>Pending</p>}    
    </div>
  );
};

export default TaskStatus;
