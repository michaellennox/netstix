var passport = require('passport');
var User = require('../models/user');

var controller = {};

controller.list = function(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.send(err);
    }
    res.json(users);
  });
};

controller.create = function(req, res) {
  var newUser = new User({
    username: req.body.username
  });
  User.register(
    newUser, req.body.password, function(err, account) {
      if(err) {
        return res.status(500).json({ err: err });
      }
      passport.authenticate('local')(req, res, function() {
        return res.status(200).json({ status: 'Registration successful!', user: newUser });
      });
    }
  );
};

controller.read = function(req, res) {
  User.findById(req.params.id)
    .populate({
      path: 'submissions',
      populate: {
        path: 'achievement'
      }
    })
    .exec(function(err, user) {
      if(err) {
        res.send(err);
      }
      res.json(user);
    });
};

module.exports = controller;
