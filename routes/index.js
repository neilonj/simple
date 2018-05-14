//import data from "/data.json";
var express = require('express');
var router = express.Router();
const app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/new',(req, res) =>
  res.send("WWOAH "));
module.exports = router;
