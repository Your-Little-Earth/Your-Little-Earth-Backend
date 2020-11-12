const serviceArray = [
    {
        id: 1,
        userid: 1,
        time: '900',
        km: '60',
    },
    {
        id: 2,
        userid: 1,
        time: '1900',
        km: '80',
    },
    {
        id: 3,
        userid: 1,
        time: '5800',
        km: '90',
    },
    {
        id: 4,
        userid: 2,
        time: '5590',
        km: '150',
    },
];


function returnAllServices() {
    console.info("Retrieving all services");
    return serviceArray;
}

function returnServiceByUserId(id) {
    console.info(`Retrieving service with specified user id: ${id}`);
    return serviceArray.filter(service => service.userid == id);
}

function createService(service) {
    console.info("Creating service");
    serviceArray.push(service);
}

module.exports = {
    returnServiceByUserId,
    returnAllServices,
    createService
}
