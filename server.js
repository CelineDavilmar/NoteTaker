const express = require('express');
const apirouter = require('./Develop/db/fs2');
const htmlrouter = require('./Develop/db/htmlroute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api/notes', apirouter);
app.use('/', htmlrouter);

app.listen(PORT, () => {
    console.log("app listening!");
})