const eventRepository = require('../repositories/EventRepository')

/*
* This method communicates with the repository and will
* retrieve all the events.
* @author Ruben Fricke
*/
async function returnAllEvents() {
    return await eventRepository.returnAllEvents();
}

/*
* This method communicates with the repository and will
* retrieve the user with the specified id.
* @author Ruben Fricke
*/
async function returnEventById(id) {
    return await eventRepository.returnEventById(id);
}

/*
* This method communicates with the repository and will
* create the specified event.
* @author Ruben Fricke
*/
async function createEvent(event) {
    return await eventRepository.createEvent(event);
}

/*
* This method communicates with the repository and will
* update the event with the specified id.
* @author Ruben Fricke
*/
async function updateEvent(id, event) {
    return await eventRepository.updateEvent(id, event);
}

/*
* This method communicates with the repository and will
* delete the event with the specified id.
* @author Ruben Fricke
*/
async function deleteEvent(id) {
    return await eventRepository.deleteEvent(id);
}

module.exports = {
    returnAllEvents,
    returnEventById,
    createEvent,
    updateEvent,
    deleteEvent
}
