// Requirements
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

// Static Files - Additionally grabbing Bootstrap and jQuery
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Set the HTML Template engine to EJS
app.set('views', './main/views');
app.set('view engine', 'ejs');

// Export app to be used in Server.js
module.exports.app = app;

// Add Routes to the app
app.use('/', require('./main/routes/routes').router);
