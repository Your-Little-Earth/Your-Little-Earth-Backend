const { Event } = require('../models');

/*
* This method communicates with the database and will
* retrieve all the events in the database.
* @author Ruben Fricke
*/
async function returnAllEvents() {
    console.info("Retrieving all users");
    return await Event.findAll({
    }).then((events) => {
        return events;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

/*
* This method communicates with the database and will
* retrieve the event with the specified id in the database.
* @author Ruben Fricke
*/
async function returnEventById(id) {
    console.info(`Retrieving event with specified id: ${id}`);
    return await Event.findOne({
        where: {
            id: id
        }
    }).then((event) => {
        return event;
    }).catch((err) => {
        console.log(err);
        return err;
    });
}

/*
* This method communicates with the database and will
* create the specified event into the database.
* @author Ruben Fricke
*/
async function createEvent(event) {
    console.info("Creating event");
    return await Event.create({
        name: event.name,
        description: event.description,
        points: event.points
    }).then((createdEvent) => {
        return createEvent;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

/*
* This method communicates with the database and will
* update the event with the specified id.
* @author Ruben Fricke
*/
async function updateEvent(id, event) {
    console.info(`Updating event with specified id: ${id}`);
    return await Event.update(event, {where: {
        id: id
    }}).then((updatedEvent) => {
        return updatedEvent;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

/*
* This method communicates with the database and will
* delete the event with the specified id.
* @author Ruben Fricke
*/
async function deleteEvent(id) {
    console.info(`Deleting event with specified id: ${id}`);
    await Event.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    returnAllEvents,
    returnEventById,
    createEvent,
    updateEvent,
    deleteEvent
}
