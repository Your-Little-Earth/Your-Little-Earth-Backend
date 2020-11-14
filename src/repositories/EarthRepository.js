const { Earth, Chunk } = require('../models');

/**
 * This method communicates with the database and retrieves the earth by the specified id.
 * @param {The id of the earth} id
 */
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

/**
 * This method will communicate with the database and creates the earth for the user.
 * @param {The earth that wil be created} earth
 * @param {The user which own the earth} user
 */
async function createEarth(earth, user) {
    console.info("Creating earth");
    return await Earth.create({
        name: earth.name,
        score: earth.score,
        userId: user.id
    }).then((createdEarth) => {
        return createdEarth;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

/**
 * This method communicates with the database and updates an existing earth.
 * @param {The id of the earth} earthId
 * @param {The updated earth model} earth
 */
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

/**
 * This method communicates with the database and deletes the specified earth.
 * @param {The id of of the earth} id
 */
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
