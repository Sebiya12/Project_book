var express = require('express');
var router = express.Router();
var List = require("../models/book").List
/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await List.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Express',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

     
module.exports = router;
