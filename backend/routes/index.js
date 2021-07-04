var express = require('express');
var definitions = express.Router();

definitions.get('/', (req, res) => {
  res.send("Hello world!");
});

module.exports = definitions;
