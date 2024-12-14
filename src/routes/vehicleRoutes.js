const express = require('express');
const { addVehicle, updateVehicleStatus, getVehicles } = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getVehicles); // Matches `GET /api/vehicles`
router.post('/', addVehicle); // Matches `POST /api/vehicles`
router.put('/:id', updateVehicleStatus); // Matches `PUT /api/vehicles/:id`


module.exports = router;
