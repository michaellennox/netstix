var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/user');

router.post('/', function() {
  User.register(
    new User({
      username: req.body.username,
      password: req.body.password
    }), function(err, account) {
      if(err) {
        return res.status(500).json({ err: err });
      }
      passport.authenticate('local')(req, res, function() {
        return res.status(200).json({ status: 'Registration successful!' })
      })
    }
  )
});

module.exports = router;
