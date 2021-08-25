const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

router.get('/sounds', controller.sounds.get);

module.exports = router;
