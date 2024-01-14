var express = require('express');
var router = express.Router();
const List = require("../models/book").List;
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('Новый маршрутизатор, для книг');
});



router.get("/:nick", async (req, res, next) => {
  try {
    const [book, books] = await Promise.all([
      List.findOne({ nick: req.params.nick }),
      List.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
    if (!book) {
      throw new Error("Нет такой книги");
    }
    renderBook(res, book.title, book.avatar, book.desc, books);
  } catch (err) {
    next(err);
  }
});


  function renderBook(res, title, picture, desc, books) {
    console.log(books);
  
    res.render('book', {
      title: title,
      picture: picture,
      desc: desc,
      menu: books  // Передаем данные в шаблонизатор EJS с именем menu
    });
  }
module.exports = router;