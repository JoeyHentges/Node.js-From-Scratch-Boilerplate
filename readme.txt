
### How to connect to the Database(s) and make a save.

const { db1, db2 } = require('./configs/db/db_connection');

const Cat = db1().model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

