// Requirements
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

// Static Files - Additionally grabbing Bootstrap and jQuery
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Set the HTML Template engine to EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Add Routes to the app
app.use('/', require('./src/routes/routes').router);

// Export app to be used in Server.js
module.exports.app = app;
