var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log('hei');
    res.render('index', { title: 'Radix Workshop' });
});

module.exports = router;
