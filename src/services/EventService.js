const eventRepository = require('../repositories/EventRepository')

/*
* This method communicates with the repository and will
* retrieve all the events.
* @author Ruben Fricke
*/
function returnAllEvents() {
    return eventRepository.returnAllEvents();
}

/*
* This method communicates with the repository and will
* retrieve the user with the specified id.
* @author Ruben Fricke
*/
function returnEventById(id) {
    return eventRepository.returnEventById(id);
}

/*
* This method communicates with the repository and will
* create the specified event.
* @author Ruben Fricke
*/
function createEvent(event) {
    return eventRepository.createEvent(event);
}

/*
* This method communicates with the repository and will
* update the event with the specified id.
* @author Ruben Fricke
*/
function updateEvent(id, event) {
    return eventRepository.updateEvent(id, event);
}

/*
* This method communicates with the repository and will
* delete the event with the specified id.
* @author Ruben Fricke
*/
function deleteEvent(id) {
    return eventRepository.deleteEvent(id);
}

module.exports = {
    returnAllEvents,
    returnEventById,
    createEvent,
    updateEvent,
    deleteEvent
}
