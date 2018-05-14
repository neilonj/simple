var express = require('express');
var router = express.Router();
//hotdog
var jdata = require('data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/new',(req, res) =>
  res.send('WOAH'));
module.exports = router;