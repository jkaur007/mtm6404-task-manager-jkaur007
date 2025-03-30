import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TaskItem = ({ task, onDelete, onToggleComplete }) => (
  <Card className={`mb-3 shadow ${task.completed ? 'bg-success text-white' : 'bg-light'}`}>
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Text>
        {task.description}
        <br />
        <strong>Due Date:</strong> {task.dueDate || 'No date'}
      </Card.Text>
      <div className="d-flex justify-content-between">
        <Button variant="warning" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </Card.Body>
  </Card>
);

export default TaskItem;
