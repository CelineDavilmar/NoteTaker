const fs = require('fs');
import uniqid from 'uniqid';

fs.readFile('./public/notes.html', function get(err, data) {
    if (err) {
        throw err;
    }
    return data;
})

fs.readFile('./public/index.html', function get(err, data) {
    if (err) {
        throw err;
    }
    return data;
})

// GET / notes should return the notes.html file.
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// GET * should return the index.html file.
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//The following API routes should be created:
//GET / api / notes should read the db.json file and return all saved notes as JSON.
//POST / api / notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.You'll need to find a way to give each note a unique id when it's saved(look into npm packages that could do this for you). */

function addNote(title, description) {
    Note.push(title = req.Note.title, description = req.Note.body)
    req.id = id.uniqid
}

router.get("/api/notes", (req, res) => {
    res
        .getNotes(req.body)
        .then(note => res.json(note))
        .catch(err => res.status(500).json(err));
});


router.post("api/notes", (req, res) => {
    const Note = new Notes({})

    Note.title = req.body.title
    Note.description = req.body.description

    res
    addNote(req.Note.title, req.Note.description)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

