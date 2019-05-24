require('dotenv').config();

module.exports.db1 = {
  secret: process.env.MONGO_DB_1_SECRET,
  database: process.env.MONGO_DB_1_URL
};

module.exports.db2 = {
  secret: process.env.MONGO_DB_2_SECRET,
  database: process.env.MONGO_DB_2_URL
};
