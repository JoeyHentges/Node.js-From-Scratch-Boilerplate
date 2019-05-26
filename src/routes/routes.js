const express = require('express');
const { graphql } = require('graphql');
const { resolvers } = require('../../controllers/resolvers/resolvers');
const { schema } = require('../../controllers//typeDefs/typeDefs');

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

// Complete Example - Bringing in routes from other files.
router.use('/users', require('./user/user').router);

module.exports.router = router;
