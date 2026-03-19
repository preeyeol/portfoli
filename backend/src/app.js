const express = require('express');
const cors = require('cors');
const path = require('path');
const messageRoutes = require('./routes/messageRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
  })
);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running',
  });
});

app.use('/api/messages', messageRoutes);
app.use('/api/resume', resumeRoutes);

app.use((error, _req, res, _next) => {
  return res.status(400).json({
    success: false,
    message: error.message || 'Something went wrong',
  });
});

module.exports = app;
