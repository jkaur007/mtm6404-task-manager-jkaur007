import React, { useState } from 'react';

const AddTask = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task:', task);
        // Add your task submission logic here
        setTask('');
    };

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Task:
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;