const express = require('express');
const router = express.Router();

// Controller Methods
const { getAllEarths } = require('../controllers/earthController');

/*
* Routes for earth
*/
router.route('/')
  .get(getAllEarths);

module.exports = router;
