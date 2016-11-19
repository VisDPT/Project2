var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
 res.redirect('/layouts');
 // originally '/allergyMonkey', but updated
});

module.exports = router;