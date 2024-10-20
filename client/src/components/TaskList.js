import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    }, []);

    const toggleComplete = (id, completed) => {
        axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed })
            .then(res => setTasks(tasks.map(task => task._id === id ? res.data : task)));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
            .then(() => setTasks(tasks.filter(task => task._id !== id)));
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <button onClick={() => toggleComplete(task._id, task.completed)}>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
