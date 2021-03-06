var express = require('express');
const { render } = require('jade');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("google cloud deploy");
  // res.redirect('https://github.com/parkanywhereonline');
});

module.exports = router;
