const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('Hello World!');
});

//Create a new event 
route.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    res.status(201).json(event);
});

// Get All Events
route.get('/events', (req, res) => {
    res.json(events);
});

// Get Event by ID
route.get('/events/:id', (req, res) => {
    const eventId = req.params.id;
    const event = events.find(e => e.id === eventId);
    if (!event) {
        res.status(404).json({ error: 'Event not found' });
    } else {
        res.json(event);
    }
});

// Update Event
route.put('/events/:id', (req, res) => {
    const eventId = req.params.id;
    const updatedEvent = req.body;
    events = events.map(e => e.id === eventId ? updatedEvent : e);
    res.json(updatedEvent);
});

// Delete Event
route.delete('/events/:id', (req, res) => {
    const eventId = req.params.id;
    events = events.filter(e => e.id !== eventId);
    res.json({ message: 'Event deleted successfully' });
});

module.exports = route;