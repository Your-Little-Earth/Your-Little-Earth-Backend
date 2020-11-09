
const express = require('express');

const router = express.Router();

// Controller Methods
const { getPosts, getPostById } = require('../controllers/userController');

router.route('/')
  .get(getPosts);

router.route('/:id')
  .get(getPostById);

module.exports = router;
