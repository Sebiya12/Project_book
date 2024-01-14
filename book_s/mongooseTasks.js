const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testok1');
var List = require("./models/book").List

const book = new List ({
    title: "Гордость",
    nick: "Gordost"
})

book.save().then(() => console.log(book.title));