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
 *  post:
 *      description: This endpoint is used for creating a new user and storing this user in the database.
 *      responses:
 *          '201':
 *              description: Successfully added the user to the database.
 *          '400':
 *              description: No user specified to create.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 * 
 */

const express = require('express');
const router = express.Router();

// Controller Methods
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
        } = require('../controllers/userController');
const { loginUser } = require('../controllers/loginController');

/*
* Routes for user endpoints without any route parameter
* @author Ruben Fricke
*/
router.route('/')
  .get(getAllUsers)
  .post(createUser);

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
