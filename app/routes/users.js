var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/user');

router.post('/', function(req, res) {
  User.register(
    new User({
      username: req.body.username,
      password: req.body.password
    }), req.body.password, function(err, account) {
      if(err) {
        return res.status(500).json({ err: err });
      }
      passport.authenticate('local')(req, res, function() {
        return res.status(200).json({ status: 'Registration successful!' });
      });
    }
  );
});

router.get('/', function(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.get('/:id', function(req, res) {
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
});

module.exports = router;
