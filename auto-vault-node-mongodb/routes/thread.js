const express = require('express');
const { body } = require('express-validator/check');

const threadController = require('../controllers/thread');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.post('/createthread', isAuth, threadController.createThread);

module.exports = router;
