const router = require('express').Router();
const modifier = require('./modifier');

router.get("/notes", (req, res) => {
    modifier
        .getNotes()
        .then(note => {
            console.log(note);
            return res.json(note);
        })
        .catch(err => res.status(500).json(err));
});

/* function addNote(title, description) {
    Note.push(title = req.Note.title, description = req.Note.body)
    req.id = id.uniqid
    readFile();
}

router.post("/notes", (req, res) => {

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
    //writeFile();
}); */

module.exports = router;