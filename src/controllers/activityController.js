const earthService = require('../services/earthService')
const userService = require('../services/UserService')
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.carService = async(req, res) => {
    let carData = req.body;
    if (isEmpty(carData)) {
        return res.status(400).json({
            error: 'There was not enough car data send. Please send totalTime and totalKm'
        });
    }
    user = await userService.getUserById(jwt.verify(req.headers['authorization'].split(' ')[1], process.env.ACCES_TOKEN_SECRET).id);
    points = (Math.floor(carData.totalTime / 15)) * -1;
    earthService.updateEarthScoreNow(user, points);
    return res.status(201).json(true);
};

function isEmpty(obj) {
    return !Object.keys(obj).length;
}
