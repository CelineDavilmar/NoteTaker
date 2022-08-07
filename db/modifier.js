const util = require('util');
const fs = require('fs');
//const note = require('../db/db.json');
const readasync = util.promisify(fs.readFile);
const writeasync = util.promisify(fs.writeFile);

class Modifier {
    read() {
        return readasync("db/db.json", "utf8")
    }

    write(note) {
        function createNewNote(body, notesArray) {
            const note = body;
            notesArray.push(note);

            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
            return note;
        };
        return writeasync("db/db.json", JSON.stringify())
    }

    addNote(title, description) {
        Note.push(title = req.Note.title, description = req.Note.body)
        req.id = id.uniqid
    }

    getNotes() {
        return this.read().then(
            note => {
                let parseNote;
                try {
                    parseNote = [].concat(JSON.parse(note));
                }
                catch (e) {
                    parseNote = [];
                }
                //console.log(parseNote);
                return parseNote;
            }
        )
    }
}

module.exports = new Modifier();