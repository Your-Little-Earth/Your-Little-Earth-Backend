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
 * /users:
 *  post:
 *      description: This endpoint is used for creating a new user and storing this user in the database.
 *      parameters:
 *          -   in: body
 *              name: user
 *              description: The user to update
 *              schema:
 *                  type: object
 *                  required:
 *                  -   username
 *                      email
 *                      password
 *                  properties:
 *                      username:
 *                          type: string
 *                      email:
 *                          type: string
 *                      password:
 *                          type: string
 *      responses:
 *          '201':
 *              description: Successfully added the user to the database.
 *          '400':
 *              description: No user specified to create.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const { loginUser } = require('../controllers/loginController');
const { createUser } = require('../controllers/userController');
router.route('/login')
  .post(loginUser);

router.route('/users')
    .post(createUser);

module.exports = router;
