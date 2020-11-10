const eventService = require('../services/EventService');

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

exports.eventOverview = (req, res) => {
    const events = eventService.returnAllEvents();
    return res.render('index',{
        events:events
    });
};
