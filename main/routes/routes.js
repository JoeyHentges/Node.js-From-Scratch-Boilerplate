const express = require('express');
const { graphql } = require('graphql');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { schema } = require('../controllers//typeDefs/typeDefs');

const router = express.Router();

// Routes from other files Bringing in routes from 'apps'.
router.use('/', require('../../apps/_/apps').router);

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

module.exports.router = router;
