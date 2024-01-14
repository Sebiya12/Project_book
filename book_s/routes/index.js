var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Гордость и Предубеждение  */
router.get('/gorgoct', function(req, res, next) {
  res.send("<h1>Страница Гордость и предубеждение</h1>")
  });
/* Страница Поклонник  */
router.get('/poklonnik', function(req, res, next) {
  res.send("<h1>Страница Поклонник</h1>")
  });
/* Страница Зажечь небеса */
router.get('/nebeca', function(req, res, next) {
  res.send("<h1>Страница Зажечь небеса</h1>")
  });
module.exports = router;
