# Node.js-From-Scratch-Starter
A from scratch starter template with many useful packages ready to be installed.

## Features

**Server-side**
* [x] **[Node.JS](https://nodejs.org)** v10.x.x
* [x] **[Express](https://github.com/expressjs/express)**
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)
* [x] **[ESLint](https://eslint.org/)** v5.x.x

**Client-side**
* [x] **[EJS](https://ejs.co/)**

## Usage

Install dependencies
```
$ npm install
```
or
```
yarn
```

For development
```bash
$ npm start
```

Run ESLint to check for ES6
```bash
$ npm run lint
```

Run ESLint to fix all fixable errors
```bash
$ npm run lint-fix
```

For production
```bash
$ npm run cluster
```

## Directory structure
```txt
+---configs
|   +---db
|       +---db_config.js
|       +---db_connection.js
|                   
+---public
|   +---css
|   +---img
|   +---js
|
+---src
|   +---routes
|   |   +---user
|   |   +---routes.js
|   +---views
|
+---.eslint.js
+---.gitignore
+---app.js
+---cluster.js
+---package-lock.json
+---package.json
+---readme.md
+---server.js

```

### How to connect to the Database(s) and make a save.
```
const { db1, db2 } = require('./configs/db/db_connection');

const Cat = db1().model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
