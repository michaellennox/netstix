var express = require('express');
var router = express.Router();
var submissionsRouter = require('./submissionsRouter');
var achievementsController = require('../controllers/achievementsController');

var Achievement = require('../models/achievement');

router.route('/').get(achievementsController.list).post(achievementsController.create);

router.route('/:id').get(achievementsController.read);

router.use('/:id/submissions', submissionsRouter);

module.exports = router;
