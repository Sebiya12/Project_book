const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testok');

var schema = mongoose.Schema({ name: String })

schema.methods.list = function(){
    console.log(this.get("name") + " - Лучшая книга")
}
    
const Book = mongoose.model('Book', schema);

const book = new Book({ name: 'Gordost' });
book.save().then(() => book.list());