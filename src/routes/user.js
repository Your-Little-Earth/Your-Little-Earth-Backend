/**
 * @swagger
 * /users:
 *  get:
 *      description: This endpoint is used for retrieving all the users stored in the database.
 *      responses:
 *          '200':
 *              description: Successfully retrieved all the users.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 * /users/{id}:
 *  get:
 *      description: This endpoint is used for retrieving a single user by id.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get.
 *      responses:
 *          '200':
 *              description: Succesfully retrieved the specified user.
 *          '400':
 *              description: The specified id is invalid.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 *          '404':
 *              description: The specified user could not be found.
 *  delete:
 *      description: This endpoint is used for deleting a single user by id.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get.
 *      responses:
 *          '200':
 *              description: Succesfully deleted the specified user.
 *          '400':
 *              description: The specified id is invalid.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 *          '404':
 *              description: The specified user could not be found.
 *  put:
 *      description: This endpoint is used for updating a single user by id.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get.
 *          -   in: body
 *              name: user
 *              description: The user to update
 *              schema:
 *                  type: object
 *                  required:
 *                  -   username
 *                      email
 *                  properties:
 *                      username:
 *                          type: string
 *                      email:
 *                          type: string
 *      responses:
 *          '200':
 *              description: Succesfully deleted the specified user.
 *          '400':
 *              description: The specified id is invalid.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 *          '404':
 *              description: The specified user could not be found.
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
        } = require('../controllers/userController');

/*
* Routes for user endpoints without any route parameter
* @author Ruben Fricke
*/
router.route('/')
  .get(getAllUsers);

/*
* Routes for user endpoints with id route parameter to
* for specifying a specific user.
* @author Ruben Fricke
* @param {id} id is the paramaeter for specifying a specific user.
*/
router.route('/:id')
  .get(getUserById)
  .delete(deleteUser)
  .put(updateUser)

module.exports = router;
