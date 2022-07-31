const fs = require('fs');
const path = require('path');
const router = require('express').Router();
//const uuidv1 = require('uuid/v1');

function readFile() {
    fs.readFile('./db/db.json', "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        return data;
    })
}

function writeFile(data) {
    fs.writeFile('./db/db.json', data, err => {
        console.log(err);
    })
}

//The following API routes should be created:
//GET / api / notes should read the db.json file and return all saved notes as JSON.
//POST / api / notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.You'll need to find a way to give each note a unique id when it's saved(look into npm packages that could do this for you). */

router.get("/api/notes", (req, res) => {
    res
        .getNotes(req.body)
        .then(note => res.json(note))
        .catch(err => res.status(500).json(err));
});

function addNote(title, description) {
    Note.push(title = req.Note.title, description = req.Note.body)
    req.id = id.uniqid
}

router.post("api/notes", (req, res) => {

    var title = req.body.title
    var description = req.body.description
    const Note = {
        title,
        description,
        id: 1
    }
    res
    addNote(req.Note.title, req.Note.description)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

module.exports = router;