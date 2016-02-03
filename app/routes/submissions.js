var express = require('express');
var router = express.Router({ mergeParams: true });

var Submission = require('../models/submission');
var User = require('../models/user');
var Achievement = require('../models/achievement');

router.post('/', function(req, res) {
  var submission = new Submission();
  submission.link = req.body.link;
  submission.comment = req.body.comment;

  Achievement.findById(req.params.id, function(err, achievement) {
    if(err) {
      res.send(err)
    }
    submission.achievement = achievement.id;
    achievement.submissions.push(submission.id);
    achievement.save(function(err) {
      if(err) {
        res.send(err)
      }
      User.findById(req.user._id, function(err, user) {
        if(err) {
          res.send(err)
        }
        submission.user = user.id;
        user.submissions.push(submission.id);
        user.save(function(err) {
          if(err) {
            res.send(err)
          }
          submission.save(function(err) {
            if(err) {
              res.send(err)
            }
            res.json({ message: 'Submission created!' });
          });
        });
      });
    });
  });
});

module.exports = router;
