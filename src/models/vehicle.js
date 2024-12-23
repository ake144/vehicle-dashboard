const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true, enum: ['active', 'inactive', 'maintenance', 'Available'], default: 'active' },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);




