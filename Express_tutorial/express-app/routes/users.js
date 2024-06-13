var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user',{title: "Users page",Users: "Bisekh Karki"});
});

module.exports = router;
