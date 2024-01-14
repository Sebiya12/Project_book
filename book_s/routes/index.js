var express = require('express');
var router = express.Router();
const List = require("../models/book").List;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
   
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });
  
module.exports = router;
