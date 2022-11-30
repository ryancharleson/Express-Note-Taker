

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const {writeFile, readFile} = fs.promises;

const notes = require('express').Router();



// This is a route for posting a new note.
notes.post('/', (req,res) => {
    console.log(req.body);

    readFile('./db/db.json').then((data) => {
        
        const { title, text } = req.body;

        const dataParser = JSON.parse(data);
        
        if (req.body) {
            const startNote = {
                text,
                title,
                id: uuidv4(),
            }

             dataParser.push(startNote)
             writeFile('./db/db.json', JSON.stringify(dataParser));
             res.json( `Success! You've added a new note!` )   
        } else {
            res.error( 'Uh Oh! Could not add note!');
        }
    })

});


//Get Route to Parse Data and display from db file where nodes are stored.
notes.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data))
    );
});

module.exports = notes;
