var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/user');

router.post('/', function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if(err) {
      return res.status(500).json({ err: err });
    }
    if(!user) {
      return res.status(401).json({ err: info });
    }
    req.logIn(user, function(err) {
      if(err) {
        return res.status(500).json({ err: 'Could not log in user' })
      }
      res.status(200).json({ status: 'Login successful!' });
    });
  })(req, res);
});

router.delete('/', function(req, res) {
  req.logout();
  res.status(200).json({ status: 'Signed out successfully!' })
});

module.exports = router;
