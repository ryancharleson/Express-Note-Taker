

const path = require('path');
const api = require('./routes');


// Requireing express for our routes
const express = require('express');
const app = express();


// Application will be displayed locally on port 3001
const PORT = process.env.PORT || 3001;



// Required middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);


// Get route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


// Get route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


// Console log to view port
app.listen(PORT, () => {
    console.log(`Now Listening at PORT: ${PORT} `)
});



module.exports = app;
