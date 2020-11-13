const { Earth, Chunk } = require('../models');

async function returnEarthById(id) {
    console.info(`Retrieving earth with specified id: ${id}`);
    return await Earth.findOne({
        include: {all: true, nested: true},
        where: {
            id: id
        }
    }).then((earth) => {
        return earth;
    }).catch((err) => {
        console.log(err);
        return err;
    });
}

async function createEarth(earth, user) {
    console.info("Creating earth");
    return await Earth.create({
        name: earth.name,
        score: earth.score,
        userId: user.id
    }).then((createdEarth) => {
        return createEarth;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

async function updateEarth(earthId, earth) {
    console.info(`Updating earth with specified earth id: ${earthId}`);
    return await Earth.update(earth.dataValues, {where: {
        id: earthId
    }}).then((updatedEarth) => {
        console.log(updatedEarth)
        return updatedEarth;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

async function deleteEarth(id) {
    console.info(`Deleting earth with specified id: ${id}`);
    await Earth.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    returnEarthById,
    createEarth,
    updateEarth,
    deleteEarth,
}
