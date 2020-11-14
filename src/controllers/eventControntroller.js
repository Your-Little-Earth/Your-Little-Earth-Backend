const eventService = require('../services/EventService');
const earthService = require('../services/earthService');
const Joi = require('joi');

/**
 * Schema for the event. This schema can be used for validating the data in this schema.
 */
const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .required(),

    description: Joi.string()
        .min(10)
        .max(1000)
        .required(),

    points: Joi.number()
        .integer()
        .min(-50)
        .max(50)
});

/**
 * Controller logic for retrieving all the available events.
 */
exports.eventOverview = async (req, res) => {
    const events = await eventService.returnAllEvents();
    console.log(events);
    return res.render('index',{
        events:events
    });
};

/**
 * Controller logic for retrieving the details of a single event specified by id.
 */
exports.detailsOverview = async (req, res) => {
    let eventId = req.params.id;
    let event = await eventService.returnEventById(eventId);
    res.render('details', {
        name: event.name,
        description: event.description,
        points: event.points
    });
};

/**
 * The controller for showing the view for adding an event.
 */
exports.eventCreateView = async (req, res) => {
    res.render('add');
};

/**
 * The controller logic for creating the event.
 */
exports.eventCreate = async (req, res) => {
    const {error, value} = schema.validate(req.body);
    if(error) {
        let errors = error.details.map(x => x.message).join(', ');
        console.warn(`Errors by submitting event: ${errors}`);
        res.render('add', {
            errors: errors
        });
    } else {
        let eventToCreate = JSON.parse(JSON.stringify(value));
        await earthService.updateEarthScore(eventToCreate.points);
        await eventService.createEvent(eventToCreate);
        res.redirect('/adminpanel');
    }
};

/**
 * The controller logic for retrieving all the events in json.
 */
exports.getAllEvents = async (req, res) => {
    const events = await eventService.returnAllEvents();
    return res.status(200).json({events});
}
