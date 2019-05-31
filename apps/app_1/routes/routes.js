const express = require('express');
const _ = require('lodash');
const { graphql } = require('graphql');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { schema } = require('../controllers//typeDefs/typeDefs');

const router = express.Router();

router.get('/', (req, res) => {
  graphql(schema, '{ cats {id name} }', resolvers.Query).then((response) => {
    console.log(response.data);
    res.render(
      'index',
      {
        title: 'hello',
        cats: response.data
      }
    );
  });
});

// Making a new cat
// Best to use just use GraphQL for querying the database.
router.get('/2', (req, res) => {
  resolvers.Mutation.createCat(_, { name: 'bob2' });
  res.send('Get all users.');
});

module.exports.router = router;
