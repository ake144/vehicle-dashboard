const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
