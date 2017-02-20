let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/ng-book');
let BookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    src: String
});
exports.Book = mongoose.model('Book', BookSchema);
