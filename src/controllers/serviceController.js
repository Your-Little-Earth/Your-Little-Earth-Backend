const serviceService = require('../services/serviceService')

exports.carService = (req, res) => {
    let carData = req.body;
    if (isEmpty(carData)) {
        return res.status(400).json({
            // success: false,
            error: 'There was not enough car data send. Please send totalTime and totalKm'
        });
    }
    let result = serviceService.addCarData(carData);
    return res.status(201).json({
        // success: true,
        data: true
    });
};

function isEmpty(obj) {
    return !Object.keys(obj).length;
}
