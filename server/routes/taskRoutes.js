const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.post('/tasks', async (req, res) => {
    const { text } = req.body;
    try {
        const newTask = new Task({ text });
        await newTask.save();
        res.json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
