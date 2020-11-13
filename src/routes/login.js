/**
 * @swagger
 * /login:
 *  post:
 *      description: This endpoint is used for retrieving all the events stored in the database.
 *      parameters:
 *          -   in: body
 *              name: Login credentials
 *              description: The credentials to log in.
 *              schema:
 *                  type: object
 *                  required:
 *                  -   email
 *                      password
 *                  properties:
 *                      email:
 *                          type: string
 *                      password:
 *                          type: string
 *      responses:
 *          '200':
 *              description: Successfully logged in.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const { loginUser } = require('../controllers/loginController');

router.route('/')
  .post(loginUser);

module.exports = router;
