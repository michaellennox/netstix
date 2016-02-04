var express = require('express');
var router = express.Router();
var sessionsController = require('../controllers/sessionsController');

router.route('/').post(sessionsController.create).delete(sessionsController.destroy);

module.exports = router;
