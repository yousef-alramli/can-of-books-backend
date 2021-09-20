"use strict";

const { bookModel } = require('../models/Book.model')

let Bookscontroller = (req, res) => {
    bookModel.find().then(data => {
        
        res.json(data);
    })
}
const creatBooksController = async (req, res) => {
    let { title,description,status,email } = req.body;
    let newBook = bookModel({ title,description,status,email } );

    newBook.save();
    
    // let bookList = await AllBooksModel.find({})
    res.status(201).json({ "response": newBook });
}

const deleteBooksController = (req, res) => {
let id = req.params.id;
bookModel.findByIdAndDelete(id,async (err,data)=>{
    if(err){
        res.status(500).send("an error occured");
    }else{
    let booksList= await bookModel.find({});
    res.status(201).json(booksList);
    }
})

}

module.exports = {
    Bookscontroller,
    creatBooksController,
    deleteBooksController
};