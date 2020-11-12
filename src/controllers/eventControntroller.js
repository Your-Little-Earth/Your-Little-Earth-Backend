const eventService = require('../services/EventService');

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

exports.getAllEvents = async (req, res) => {
    const events = await eventService.returnAllEvents();
    return res.status(200).json({
        success: true,
        data: events
    });
}
