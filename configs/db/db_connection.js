const mongoose = require('mongoose');
const databases = require('./db_config');

module.exports.db1 = () => {
  mongoose.connect(databases.db1.database, { useNewUrlParser: true });
  return mongoose;
};

module.exports.db2 = () => {
  mongoose.connect(databases.db2.database, { useNewUrlParser: true });
  return mongoose;
};
