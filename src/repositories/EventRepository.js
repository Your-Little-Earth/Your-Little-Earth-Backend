
const eventArray = [
    {
        id: 1,
        name: 'Event 1',
        description: 'Description',
        date: new Date(2020, 1, 1)
    },
    {
        id: 2,
        name: 'Event 2',
        description: 'Description',
        date: new Date(2020, 1, 1)
    }
];

/*
* This method communicates with the database and will
* retrieve all the events in the database.
* @author Ruben Fricke
*/
function returnAllEvents() {
    console.info("Retrieving all users");
    return eventArray;
}

/*
* This method communicates with the database and will
* retrieve the event with the specified id in the database.
* @author Ruben Fricke
*/
function returnEventById(id) {
    console.info(`Retrieving event with specified id: ${id}`);
    return eventArray.filter(event => event.id == id);
}

/*
* This method communicates with the database and will
* create the specified event into the database.
* @author Ruben Fricke
*/
function createEvent(event) {
    console.info("Creating event");
    eventArray.push(event);
}

/*
* This method communicates with the database and will
* update the event with the specified id.
* @author Ruben Fricke
*/
function updateEvent(id, event) {
    console.info(`Updating event with specified id: ${id}`);
    let index = eventArray.findIndex(event => event.id == id);
    eventArray[index] = event;
}

/*
* This method communicates with the database and will
* delete the event with the specified id.
* @author Ruben Fricke
*/
function deleteEvent(id) {
    console.info(`Deleting event with specified id: ${id}`);
    let index = eventArray.findIndex(event => event.id == id);
    eventArray.splice(index, 1);
}

module.exports = {
    returnAllEvents,
    returnEventById,
    createEvent,
    updateEvent,
    deleteEvent
}
