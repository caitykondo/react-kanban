const express = require('express');
let router = express.Router();
const db = require('./../models');
const { Card } = db;

router.route('/')
  .get((req, res) => {
    res.send('hello world');
  });

module.exports = router;