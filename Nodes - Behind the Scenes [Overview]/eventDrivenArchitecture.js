let events = require('events');

// Creating an event emitter object
let eventsEmitter = new events.EventEmitter();

// Creating an event handler [ This is the Event Listener]
eventsEmitter.on('connection', () => {
    console.log('Connection Established');
});

// Emitting the connection event
eventsEmitter.emit('connection');