// This module is great for real time applications because you can create
// custom events and listens to those events
// you can also listen for built in events like data event on a readable stream

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyehandler(name) {
    console.log('Goodbye ' + name);
}

// Register Event Listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyehandler);

// Emit Events
myEmitter.emit('greet', 'Jericho');
myEmitter.emit('goodbye', 'Jericho');

// Error Events
myEmitter.on('error', (err) => {
    console.log('An Error Occured:', err);
});

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'));