const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
const queryRoutes = require('./src/routes/queryRoutes');
app.use('/api', queryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export the app for Vercel
