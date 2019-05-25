const { db1, db2 } = require('../configs/db/db_connection');

module.exports.Cat = db1().model('Cat', { name: String });
