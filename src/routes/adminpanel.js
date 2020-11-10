const express = require('express');
const router = express.Router();

// Controller Methods
const {
    eventOverview,
    detailsOverview
        } = require('../controllers/eventControntroller');

/*
* Routes for admin panel without any route parameter.
* @author Ruben Fricke
*/
router.route('/')
        .get(eventOverview);

router.route('/events/details/:id')
        .get(detailsOverview)

module.exports = router;
