import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/tasks', { title })
            .then(res => addTask(res.data));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
