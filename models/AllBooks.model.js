"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require('./Book.model')

const AllBooksSchema = new mongoose.Schema({
    books: [bookSchema]
});

const AllBooksModel = mongoose.model('AllBook', AllBooksSchema);

let seedAllBooks = () => {
    let bookList = [
    ]
    let newBooks = new AllBooksModel({
        books: bookList
    })
    newBooks.save();
}

module.exports = {
    seedAllBooks,
    AllBooksModel
}


