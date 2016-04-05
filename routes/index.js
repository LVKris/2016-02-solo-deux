var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('Hello');
router.get('/', function(req, res, next) {
  console.log('we are here');
  res.sendFile(__dirname + '/public/index.html');
  // res.render('index', { title: 'Express' });
});
router.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

module.exports = router;
