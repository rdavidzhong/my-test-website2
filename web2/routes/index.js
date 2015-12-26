var express = require('express');
var router = express.Router();
// Add appdata in routes index from Lesson 26
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork
  });
});

// Lesson 25 - more routes (tools to organize applications)
/*
1. routes
2. add views - speakers.ejs
*/

/* GET speakers page. */

/* GET speakers page. */
router.get('/speakers', function(req, res) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item) {
      myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork
  });
});

router.get('/speakers/:speakerid', function(req, res) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork
  });
});


module.exports = router;

