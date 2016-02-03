var express = require('express');
var router = express.Router({ mergeParams: true });

var Submission = require('../models/submission');

router.post('/', function(req, res) {
  var submission = new Submission();
  submission.link = req.body.link;
  submission.comment = req.body.comment;

  submission.save(function(err) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Submission created!' });
  });
});

module.exports = router;
