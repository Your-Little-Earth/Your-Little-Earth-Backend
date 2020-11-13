const express = require('express');
const router = express.Router();

// Controller Methods
const {
    carService
    } = require('../controllers/serviceController');

    router.route('/car')
     .post(carService);

module.exports = router;
