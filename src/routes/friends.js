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
router.route('/:id')
    .get(getAllFriends)
    .post(addFriend)
    .delete(deleteFriend)
