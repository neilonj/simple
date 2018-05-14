//import data from "/data.json";
const app = express();
var express = require('express');
var router = app.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/new',(req, res) =>
  res.send('WOAH'));
module.exports = router;
