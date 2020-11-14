const express = require('express');
const router = express.Router();

// Controller Methods
const {
    carService
} = require('../controllers/activityController');

router.route('/car')
    .post(carService);

module.exports = router;
