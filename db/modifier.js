const util = require('util');
const fs = require('fs');
const readasync = util.promisify(fs.readFile);

class Modifier {
    read() {
        return readasync("db/db.json", "utf8")
    }

    /* writeFile(data) {
        fs.writeFile('./db/db.json', data, err => {
            console.log(err);
        })
    } */

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