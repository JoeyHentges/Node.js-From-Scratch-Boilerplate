const express = require('express');
// Bringing in other apps
const { contents } = require('./app_1/app_main');

const router = express.Router();

// Adding other apps routes to the overall set of routes
router.use('/app_1', contents.routes);

module.exports.router = router;
