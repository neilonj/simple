//import data from "/data.json";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
express.get('/new',(req, res) =>
  res.send('WOAH'));
module.exports = router;
