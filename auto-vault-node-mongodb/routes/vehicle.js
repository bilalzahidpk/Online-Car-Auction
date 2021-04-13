const express = require('express');
const { body } = require('express-validator/check');

const User = require('../models/user');
const vehicleController = require('../controllers/vehicle');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.post('/addcar', isAuth, vehicleController.addVehicle);

module.exports = router;
