const eventService = require('../services/EventService');
const Joi = require('joi');

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

exports.eventOverview = async (req, res) => {
    const events = await eventService.returnAllEvents();
    console.log(events);
    return res.render('index',{
        events:events
    });
};

exports.detailsOverview = async (req, res) => {
    let eventId = req.params.id;
    let event = await eventService.returnEventById(eventId);
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
    const {error, value} = schema.validate(req.body);
    if(error) {
        let errors = error.details.map(x => x.message).join(', ');
        console.warn(`Errors by submitting event: ${errors}`);
        res.render('add', {
            errors: errors
        });
    } else {
        let eventToCreate = JSON.parse(JSON.stringify(value));
        eventService.createEvent(eventToCreate);
        res.redirect('/adminpanel');
    }
};

exports.getAllEvents = async (req, res) => {
    const events = await eventService.returnAllEvents();
    return res.status(200).json({
        success: true,
        data: events
    });
}
