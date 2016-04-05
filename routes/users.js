var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('we are in users.js');
  res.send('respond with a resource');
});
console
module.exports = router;
