"use strict";
const { AllBooksModel } = require('../models/AllBooks.model');
const { bookModel } = require('../models/Book.model')

let AllBookscontroller = (req, res) => {
    AllBooksModel.find().then(data => {
        
        res.json(data);
    })
}
const creatBooksController = async (req, res) => {
    let { books } = req.body;
    let newBook = bookModel(books);

    newBook.save();
    let addBook = new AllBooksModel({ books: newBook });
    addBook.save();
    let bookList = await AllBooksModel.find({})
    res.status(201).json({ "response": bookList });
}

const deleteBooksController = (req, res) => {
let id = req.params.id;
AllBooksModel.findByIdAndDelete(id,async (err,data)=>{
    if(err){
        res.status(500).send("an error occured");
    }else{
    let booksList= await AllBooksModel.find({});
    res.json(booksList);
    }
})

}

module.exports = {
    AllBookscontroller,
    creatBooksController,
    deleteBooksController
};