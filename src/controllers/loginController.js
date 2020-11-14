const jwt = require('jsonwebtoken');
const userService = require('../services/UserService')
require('dotenv').config();

/**
 * The controller logic for logging in and creating an access token.
 */
exports.loginUser = async (req, res) => {
    let check = await userService.validateLoginCredentials(req.body.email, req.body.password)
    console.log(check.status);
    if(check.status) {
        const accesToken = 'Bearer '+ jwt.sign(check.data, process.env.ACCES_TOKEN_SECRET);
        return res.status(200).json({
            token: accesToken,
            user: check.data
        });
    }
    return res.sendStatus(400);
};
