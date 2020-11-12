/**
 * @swagger
 * /events:
 *  get:
 *      description: This endpoint is used for retrieving all the events stored in the database.
 *      responses:
 *          '200':
 *              description: Successfully retrieved all the events.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const {
    getAllEvents
} = require('../controllers/eventControntroller');

router.route('/')
    .get(getAllEvents);

module.exports = router;
