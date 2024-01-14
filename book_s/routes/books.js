var express = require('express');
var router = express.Router();
const List = require("../models/book").List;

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('Новый маршрутизатор, для книг');
});



router.get("/:nick", async (req, res, next) => {
    try {
      const book = await List.findOne({ nick: req.params.nick });
      console.log(book);
      if (!book) {
        throw new Error("Нет такой книги");
      }
      res.render('book', {
        title: book.title,
        picture: book.avatar,
        desc: book.desc
      });
    } catch (err) {
      next(err);
    }
  });
    
module.exports = router;