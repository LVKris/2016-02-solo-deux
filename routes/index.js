var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

router.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

module.exports = router;
