var express = require('express');
var router = express.Router();
//import data from './data/MOCK_DATA.json';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
