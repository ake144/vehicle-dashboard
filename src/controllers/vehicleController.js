const Vehicle = require('../models/vehicle');

// Add a new vehicle
exports.addVehicle = async (req, res) => {
  try {
    const { name, status } = req.body;
    const vehicle = new Vehicle({ name, status });
    await vehicle.save();
    res.status(201).json({ message: 'Vehicle added successfully', vehicle });
  } catch (error) {
    res.status(500).json({ message: 'Error adding vehicle', error });
  }
};

// Update vehicle status
exports.updateVehicleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const vehicle = await Vehicle.findByIdAndUpdate(id, { status, lastUpdated: Date.now() }, { new: true });
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.status(200).json({ message: 'Vehicle status updated', vehicle });
  } catch (error) {
    res.status(500).json({ message: 'Error updating vehicle status', error });
  }
};

// Get all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ vehicles });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vehicles', error });
  }
};
