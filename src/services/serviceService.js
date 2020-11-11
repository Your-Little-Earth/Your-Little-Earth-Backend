const serviceRepository = require('../repositories/ServiceRepository');

function getAllServices() {
    return serviceRepository.returnAllServices();
}

function createService(service) {
    return serviceRepository.createService(service);
}

function getServiceByUserId(id) {
    return serviceRepository.returnServiceByUserId(id);
}

module.exports = {
    createService,
    getAllServices,
    getServiceByUserId
}
