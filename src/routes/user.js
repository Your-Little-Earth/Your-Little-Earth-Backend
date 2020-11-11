// /**
//  * @swagger
//  * /:
//  * get:
//  *  description: Test description
//  *  responses:
//  *      '200':
//  *          description: Success
//  */

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
