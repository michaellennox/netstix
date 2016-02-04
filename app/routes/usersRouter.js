var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.route('/').post(usersController.create).get(usersController.list);

router.route('/:id').get(usersController.read);

module.exports = router;
