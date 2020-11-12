const eventService = require('../services/EventService');
// var ValidateModel = require('validate-model');
// var EventValidation = require('../Validators/eventValidator')
// var validateAll = ValidateModel.validateAll;

exports.eventOverview = async (req, res) => {
    const events = eventService.returnAllEvents();
    return res.render('index',{
        events:events
    });
};

exports.detailsOverview = async (req, res) => {
    let eventId = req.params.id;
    let event = eventService.returnEventById(eventId)[0];
    res.render('details', {
        name: event.name,
        description: event.description,
        points: event.points
    });
};

exports.eventCreateView = async (req, res) => {
    res.render('add');
};

exports.eventCreate = async (req, res) => {
    if(false) {
        console.warn(`Errors by submitting event: ${eventValidation.messages}`);
        res.render('create-event', {
            errors: eventValidation.messages
        });
    } else {
        let eventToCreate = JSON.parse(JSON.stringify(req.body));
        eventService.createEvent(eventToCreate);
        res.redirect('/adminpanel');
    }
};
