// TODO -- Bring in express module
// TODO -- call /db/notes
// TODO -- set app to call the notes middleware.

const express = require('express');


// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
