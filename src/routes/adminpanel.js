const express = require('express');
const router = express.Router();

// Controller Methods
const {
    eventOverview,
        } = require('../controllers/eventControntroller');

/*
* Routes for admin panel without any route parameter.
* @author Ruben Fricke
*/
router.route('/')
        .get(eventOverview);

module.exports = router;
