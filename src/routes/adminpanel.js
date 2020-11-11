const express = require('express');
const router = express.Router();

// Controller Methods
const {
    eventOverview,
    detailsOverview,
    eventCreateView,
    eventCreate
} = require('../controllers/eventControntroller');

const {
    questionOverview,
    questionCreateView,
    questionCreate,
    questionDetails
} = require('../controllers/questionController');
/*
* Routes for admin panel without any route parameter.
* @author Ruben Fricke
*/
router.route('/')
        .get(eventOverview);

/*
* Routes for admin panel for creating an event.
* @author Ruben Fricke
*/
router.route('/events/create')
        .get(eventCreateView)
        .post(eventCreate);

/*
* Routes for admin panel for creating an event.
* @author Ruben Fricke
*/
router.route('/events/details/:id')
        .get(detailsOverview)


router.route('/')
    .get(questionOverview);

router.route('/questions/create')
    .get(questionCreateView)
    .post(questionCreate);

router.route('/events/details/:id')
    .get(questionDetails);

module.exports = router;
