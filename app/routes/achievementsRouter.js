var express = require('express');
var router = express.Router();
var achievementsController = require('../controllers/achievementsController');

router.route('/').get(achievementsController.list).post(achievementsController.create);

router.route('/:id').get(achievementsController.read);

var submissionsRouter = require('./submissionsRouter');
router.use('/:id/submissions', submissionsRouter);

module.exports = router;
