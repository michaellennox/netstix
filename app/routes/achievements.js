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
  achievement.title = req.body.title;
  achievement.criteria = req.body.criteria;
  achievement.save(function(err) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Achievement created!'});
  });
});

router.get('/:id', function(req, res) {
  Achievement.findById(req.params.id, function(err, achievement) {
    if(err) {
      res.send(err);
    }
    res.json(achievement);
  });
});

router.use('/:id/submissions', submissions);

module.exports = router;
