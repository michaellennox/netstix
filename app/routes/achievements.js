var express = require('express');
var router = express.Router();
var submissions = require('./submissions');

var Achievement = require('../models/achievement');

router.get('/', function(req, res) {
  console.log(req.user);
  Achievement.find(function(err, achievements) {
    if(err) {
      res.send(err);
    }
    res.json(achievements);
  });
});

router.post('/', function(req, res) {
  var achievement = new Achievement();
  req.body.badgeLink = typeof req.body.badgeLink !== 'undefined' ? req.body.badgeLink : '/images/badges/nobadge.png';
  achievement.title = req.body.title;
  achievement.criteria = req.body.criteria;
  achievement.points = req.body.points;
  achievement.badgeLink = req.body.badgeLink;
  achievement.save(function(err) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Achievement created!'});
  });
});

router.get('/:id', function(req, res) {
  Achievement.findById(req.params.id)
    .populate({
      path: 'submissions',
      populate: {
        path: 'user'
      }
    })
    .exec(function(err, achievement) {
      if(err) {
        res.send(err);
      }
      res.json(achievement);
    });
});

router.use('/:id/submissions', submissions);

module.exports = router;
