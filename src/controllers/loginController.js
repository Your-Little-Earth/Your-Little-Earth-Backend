const jwt = require('jsonwebtoken');
const userService = require('../services/UserService')
require('dotenv').config();

exports.loginUser = async (req, res) => {
    let check = await userService.validateLoginCredentials(req.body.email, req.body.password)
    console.log(check.status);
    if(check.status) {
        const accesToken = 'Bearer '+ jwt.sign(check.data, process.env.ACCES_TOKEN_SECRET);
        check.data.password = 'This is a secret password my friend'
        return res.status(200).json({
            token: accesToken,
            user: check.data
        });
    }
    return res.sendStatus(400);
};
