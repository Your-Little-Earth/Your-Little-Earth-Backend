const eventService = require('../services/EventService');
// var ValidateModel = require('validate-model');
// var EventValidation = require('../Validators/eventValidator')
// var validateAll = ValidateModel.validateAll;

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
        description: event.description,
        points: event.points
    });
};

exports.eventCreateView = (req, res) => {
    res.render('add');
};

exports.eventCreate = (req, res) => {
    var eventValidation = validateAll(EventValidation, req.body);
    if(!eventValidation) {
        console.warn(`Errors by submitting event: ${eventValidation.messages}`);
        res.render('create-event', {
            errors: eventValidation.messages
        });
    } else {
        let eventToCreate = req.body;
        eventService.createEvent(eventToCreate);
        res.redirect('/adminpanel');
    }
};
