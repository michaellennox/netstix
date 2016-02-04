var express = require('express');
var router = express.Router({ mergeParams: true });

var submissionsController = require('../controllers/submissionsController');

router.route('/').post(submissionsController.create);

module.exports = router;
