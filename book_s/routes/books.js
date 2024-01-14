var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');

//const List = require("../models/book").List;
//var checkAuth = require("./../middleware/checkAuth.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('Новый маршрутизатор, для книг');
});



// router.get("/:nick", async (req, res, next) => {
//       try {
//         const [book, books] = await Promise.all([
//           List.findOne({ nick: req.params.nick }),
//           List.find({}, { _id: 0, title: 1, nick: 1 })
//         ]);
//       if (!book) {
//         throw new Error("Нет такой книги");
//       }
//       renderBook(res, book.title, book.avatar, book.desc, books);
      
//     } catch (err) {
//       next(err);
//     }
//   });

//   function renderBook(res, title, picture, desc, books) {
//     console.log(books);
  
//     res.render('book', {
//       title: title,
//       picture: picture,
//       desc: desc,
//     });
//   }

  router.get("/:nick", function(req, res, next) {
    db.query(`SELECT * FROM lists WHERE lists.nick = '${req.params.nick}'`, (err, lists) => {
    if(err) {
      console.log(err);
      if(err) return next(err)
      } else {
        if(lists.length == 0) return next(new Error("Книг нет в наличии"))
          var list = lists[0];
          res.render('book', {
            title: list.title,
            picture: list.avatar,
            desc: list.about
    })
  }
  })
  
  });
  
module.exports = router;