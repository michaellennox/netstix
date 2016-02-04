var Achievement = require('../models/achievement');

var controller = {};

controller.list = function(req, res) {
  console.log(req.user);
  Achievement.find(function(err, achievements) {
    if(err) {
      res.send(err);
    }
    res.json(achievements);
  });
};

controller.create = function(req, res) {
  var achievement = new Achievement();
  achievement.title = req.body.title;
  achievement.criteria = req.body.criteria;
  achievement.points = req.body.points;
  achievement.badgeLink = req.body.badgeLink;
  achievement.challengeRepo = req.body.challengeRepo;
  achievement.save(function(err) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Achievement created!'});
  });
};

controller.read = function(req, res) {
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
};

module.exports = controller;
