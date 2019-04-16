var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Tria'})
})
router.get('/regis/', function(req, res, next) {
    res.render('regis', {nama: 'Tria'})
})

module.exports = router;