const jwt = require('jsonwebtoken');
const userService = require('../services/UserService')
require('dotenv').config();

exports.loginUser = (req, res) => {
    const user = userService.getUserByEmail(req.body.email);

    //Need to hash the req password
    if(userService.validateLoginCredentials(req.body.email, req.body.password)) {
        const accesToken = 'Bearer '+ jwt.sign(user[0], process.env.ACCES_TOKEN_SECRET);

        return res.status(200).json({
            token: accesToken
        });
    }
    return res.sendStatus(400);
};
