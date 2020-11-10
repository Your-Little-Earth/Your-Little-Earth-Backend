const eventService = require('../services/EventService');

exports.eventOverview = (req, res) => {
    const events = eventService.returnAllEvents();
    return res.render('index',{
        events:events
    });
};

exports.detailsOverview = (req, res) => {
    let eventId = req.params.id;
    let event = eventService.returnEventById(eventId)[0];
    res.render('details', {
        name: event.name,
        description: event.description
    });
};

exports.eventCreateView = (req, res) => {
    return res.sender('create-event');
};

exports.eventCreate = (req, res) => {
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();
    req.checkBody('points', 'Points should be specified').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        res.render('create-event', {
            errors: errors
        });
    } else {
        let eventToCreate = req.body;
        eventService.createEvent(eventToCreate);
    }
};
