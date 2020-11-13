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

function addCarData(service) {
    console.info("Adding carData");
    serviceArray.push(service);
}

module.exports = {
    addCarData
}
