const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'hello'
    }
  );
});

// Complete Example - Bringing in routes from other files.
router.use('/users', require('./user/user').router);

module.exports.router = router;
