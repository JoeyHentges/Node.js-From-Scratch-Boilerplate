const express = require('express');
const { graphql } = require('graphql');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { typedefs } = require('../controllers//typeDefs/typeDefs');

const router = express.Router();

router.get('/', (req, res) => {
  graphql(typedefs, '{ cats {id name} }', resolvers.Query).then((response) => {
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
  graphql(typedefs, '{ cat(id: "5cf180d4cf144404fc2b3d64") {id name} }', resolvers.Query).then((response) => {
    console.log(response.data);
    res.send('got the cat by id');
  });
});

router.get('/3', (req, res) => {
  const schema = `mutation{ createCat(
    name: "bob"
  ) {id name}}`;
  graphql(typedefs, schema, resolvers.Mutation).then((response) => {
    console.log(response);
    res.send('created a cat');
  });
});

module.exports.router = router;
