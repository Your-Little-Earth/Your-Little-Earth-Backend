const express = require('express');
const router = express.Router();

const {
    questionOverview,
    questionCreateView,
    questionCreate,
    questionDetails
} = require('../controllers/questionController');

router.route('/')
    .get(questionOverview);

router.route('/questions/create')
    .get(questionCreateView)
    .post(questionCreate);

router.route('/events/details/:id')
    .get(questionDetails);

module.exports(router);
