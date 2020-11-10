const jwt = require('jsonwebtoken');
const userService = require('../services/UserService')
require('dotenv').config();

/*
* Retrieve all the users stored in the database.
* @author Lars van Erp
* @route POST /user/login
* @access Public
*/
exports.loginUser = (req, res) => {
    const user = userService.getUserByEmail(req.body.email);

    //Need to hash the req password
    if(req.body.password != user[0].password) return res.sendStatus(400);
    const accesToken = 'Bearer '+ jwt.sign(user[0], process.env.ACCES_TOKEN_SECRET);

    return res.status(200).json({
        token: accesToken
    });
};
