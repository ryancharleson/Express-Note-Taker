

const routeNotes = require('./notes');

const app = require('express').Router();

app.use('/notes', routeNotes);



module.exports = app;
