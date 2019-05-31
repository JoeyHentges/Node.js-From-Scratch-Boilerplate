const { dbs } = require('../configs/db/db_connection');

module.exports.Cat = dbs.db1().model('Cat', { name: String });
