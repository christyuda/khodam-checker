const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

require('dotenv').config();
app.use(cors());
const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
    origin: 'https://khodamku.github.io/', // Replace with your frontend URL
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
const queryRoutes = require('./src/routes/queryRoutes');
const trakteerRoutes = require('./src/routes/trakteerRoutes');

app.use('/api', queryRoutes);
app.use('/api', trakteerRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export the app for Vercel
