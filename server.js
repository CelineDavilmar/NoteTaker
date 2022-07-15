
//const router = require('');
const express = require('express');
//const path = require('path');
//const session = require('express-session');
const router = require('./miniature-eureka/Develop/db/fs');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api/notes', router);
app.use('/notes', router);
