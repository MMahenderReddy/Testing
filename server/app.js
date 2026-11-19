const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notificationsRouter = require('./routes/notifications');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kanban', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/notifications', notificationsRouter);

app.get('/', (req, res) => {
  res.send('Kanban backend API running');
});

module.exports = app;
