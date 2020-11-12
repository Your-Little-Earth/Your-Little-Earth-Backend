/**
 * @swagger
 * /friends:
 *  get:
 *      description: This endpoint is used for retrieving all the friends from the specified user.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to get friends from.
 *      responses:
 *          '200':
 *              description: Successfully retrieved all friends from the users.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 *  post:
 *      description: This endpoint is used for creating a new friend for the logged in user.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to add as friend.
 *      responses:
 *          '201':
 *              description: Successfully added the user as friend.
 *          '400':
 *              description: Invalid user Id specified.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 *  delete:
 *      description: This endpoint is used for deleting a friend.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: integer
 *              required: true
 *              description: Numeric ID of the user to delete as friend.
 *      responses:
 *          '200':
 *              description: Successfully deleted the user as friend.
 *          '400':
 *              description: Invalid user Id specified.
 *          '401':
 *              description: Unable to access this endpoint without being authorized.
 */

const express = require('express');
const router = express.Router();

/**
 * Controller methods to import
 */
const {
    getAllFriends,
    addFriend,
    deleteFriend
        } = require('../controllers/friendController');

/**
 * @description Routes for CRUD functionality for friends
 * with parameter.
 */
router.route('/')
    .get(getAllFriends)
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;
