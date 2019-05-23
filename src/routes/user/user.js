const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users.');
});

router.post('/', (req, res) => {
  // Create user
  res.send('Some response.');
});

module.exports.router = router;
