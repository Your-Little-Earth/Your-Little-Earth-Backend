
const express = require('express');

const router = express.Router();

// Controller Methods
const { getAllUsers, getUserById } = require('../controllers/userController');

router.route('/')
  .get(getAllUsers);

router.route('/:id')
  .get(getUserById);

module.exports = router;
