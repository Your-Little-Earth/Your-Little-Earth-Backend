const express = require('express');
const router = express.Router();

// Controller Methods
const {
    eventOverview,
    eventCreateView,
    eventCreate
} = require('../controllers/eventControntroller');

router.route('/')
        .get(eventOverview);

router.route('/events/create')
        .get(eventCreateView)
        .post(eventCreate);

module.exports = router;
