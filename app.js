const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // For parsing application/json

mongoose.connect(process.env.MONGODB_KHODAM, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const queryRoutes = require('./src/routes/queryRoutes');

// Use routes
app.use('/api', queryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;