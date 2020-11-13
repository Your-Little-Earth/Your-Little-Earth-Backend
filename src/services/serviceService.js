const serviceRepository = require('../repositories/ServiceRepository');

function addCarData(carData){
    return serviceRepository.addCarData(carData);
}

module.exports = {
    addCarData
}
