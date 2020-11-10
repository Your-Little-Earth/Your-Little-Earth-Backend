const jwt = require('jsonwebtoken');
require('dotenv').config();

/*
* Retrieve all the users stored in the database.
* @author Lars van Erp
* @route POST /user/login
* @access Public
*/
exports.loginUser = (req, res) => {
    //Authenticate

    const username = req.body.username;
    const user = {name: username}
    const accesToken = jwt.sign(user, process.env.ACCES_TOKEN_SECRET);

    return res.status(200).json({
        accessToken: accesToken
    });
};
