const express = require('express');
const router = express.Router();

// Controller Methods
const {
    eventOverview,
    eventCreateView,
    eventCreate,
    detailsOverview
} = require('../controllers/eventControntroller');

router.route('/')
        .get(eventOverview);

router.route('/events/create')
        .get(eventCreateView)
        .post(eventCreate);

router.route('/events/details/:id')
    .get(detailsOverview);

module.exports = router;
