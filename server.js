const express = require('express');
const apirouter = require('./db/fs2');
const htmlrouter = require('./db/htmlroute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.use('/api', apirouter);
app.use('/', htmlrouter);

app.listen(PORT, () => {
    console.log("app listening!");
})