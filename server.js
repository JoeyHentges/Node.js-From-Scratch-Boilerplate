const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { app } = require('./app');

const port = process.env.PORT || 3000;

// Start up the server!
app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
