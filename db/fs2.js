const router = require('express').Router();
const modifier = require('./modifier');
//const note = require('../db/db.json');

router.get("/notes", (req, res) => {
    modifier
        .getNotes()
        .then(note => {
            console.log(note);
            return res.json(note);
        })
        .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {

    modifier
        .createNewNote(req.body.title, req.body.description)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

module.exports = router;