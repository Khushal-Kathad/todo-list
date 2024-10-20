const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('DB connection error:', err));

const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
