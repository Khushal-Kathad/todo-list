const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to MongoDb');

}).catch((err) => {
    console.log(err)
});

const taskRoutes = require('./routes/taskRoutes.js');
app.use('/api', taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
