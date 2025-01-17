const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('task', taskSchema);
