const express = require('express');
const router = express.Router();

// Controller Methods
const { loginUser } = require('../controllers/loginController');

/*
* Route for login
* @author Lars van Erp
*/
router.route('/')
  .post(loginUser);

module.exports = router;
