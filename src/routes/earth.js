/**
 * @swagger
 * /earths/{id}:
 *  get:
 *      description: This endpoint is used for retrieving the specified earth.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get.
 *      responses:
 *          '200':
 *              description: Successfully retrieved the specified earth.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 * /earths/user/{id}:
 *  get:
 *      description: This endpoint is used for retrieving the earth from the specified user.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get.
 *      responses:
 *          '200':
 *              description: Successfully retrieved the earth from the specified user.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const {
    getEarthById,
    getEarthByUserId
} = require('../controllers/earthController');

router.route('/:id')
    .get(getEarthById);

router.route('/user/:id')
    .get(getEarthByUserId);

module.exports = router;
