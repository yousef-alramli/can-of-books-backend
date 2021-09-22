"use strict";
const { bookModel, seedBook } = require('../models/Book.model')

let Bookscontroller = (req, res) => {

    bookModel.find().then(data => {
       
        res.json(data);
    })
}
const creatBooksController = async (req, res) => {
    let { title, description, status, email } = req.body;
    let newBook = bookModel({ title, description, status, email });
    newBook.save();
    console.log(newBook);
    let bookList = await bookModel.find({});
    res.status(201).json(bookList);
}

const deleteBooksController = (req, res) => {
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, async (err, data) => {

        let booksList = await bookModel.find({});
        res.json(booksList);
    })

}

const upsateBooksController = async (req, res) => {
    let bookId = req.params.id;
    let updatedBook = req.body;
    bookModel.findOne({ _id: bookId }).then(book => {
        book.title = updatedBook.title;
        book.description = updatedBook.description;
        book.status = updatedBook.status;
        book.email = updatedBook.email;
        book.save();
    });
    let updatedList = await bookModel.find();
    res.status(200).send(updatedList);
}

module.exports = {
    Bookscontroller,
    creatBooksController,
    deleteBooksController,
    upsateBooksController
};