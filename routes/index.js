var express = require('express');
var router = express.Router();
import data from './data/data.json';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/newitem', (req, res) =>
  res.send(`a post request with /newitem route`));
module.exports = router;
