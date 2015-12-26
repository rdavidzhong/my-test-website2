var express = require('express');
var router = express.Router();
// Add appdata in routes index from Lesson 26
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork
  });
});

module.exports = router;
