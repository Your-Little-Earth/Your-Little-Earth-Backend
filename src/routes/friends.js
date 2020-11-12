const express = require('express');
const router = express.Router();

/**
 * Controller methods to import
 */



/**
 * @description Routes for CRUD functionality for friends
 * with parameter.
 */
router.route('/:id')
    .get(getAllFriends)
    .post(addFriend)
    .delete(deleteFriend)
