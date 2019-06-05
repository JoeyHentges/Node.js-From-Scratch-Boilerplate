const { dbs } = require('../configs').configs;

module.exports.App = dbs.db1().model('App', {
  appName: String,
  dateCreated: Date,
  appConfig: {}
});
