const jwt = require('jsonwebtoken');
const userService = require('../services/UserService')
require('dotenv').config();

exports.loginUser = (req, res) => {
    //Need to hash the req password
    let check = userService.validateLoginCredentials(req.body.email, req.body.password)
    console.log(check);
    if(check.status) {
        const accesToken = 'Bearer '+ jwt.sign(check.data[0], process.env.ACCES_TOKEN_SECRET);

        return res.status(200).json({
            token: accesToken
        });
    }
    return res.sendStatus(400);
};
