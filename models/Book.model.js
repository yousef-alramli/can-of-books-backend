"use strict";
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});
let seedBook = () => {
    let newBook1 = new bookModel({
        title: 'War and Peace',
        description: "War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature.",
        status: '“Nothing is so necessary for a young man as the company of intelligent women.”',
        email: 'book@sorce.com'
    });
    let newBook2 = new bookModel({
        title: 'Song of Solomon',
        description: "Song of Solomon is a 1977 novel by American author Toni Morrison, her third to be published. It follows the life of Macon 'Milkman' Dead III, an African-American man living in Michigan, from birth to adulthood.",
        status: '“You wanna fly, you got to give up the shit that weighs you down.”',
        email: 'book@sorce.com'
    });
    let newBook3 = new bookModel({
        title: 'Ulysses',
        description: "Ulysses is a modernist novel by Irish writer James Joyce. It was first serialized in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday.",
        status: "“Think you're escaping and run into yourself. Longest way round is the shortest way home.”",
        email: 'book@sorce.com'
    });
    newBook1.save();
    newBook2.save();
    newBook3.save();
}

const bookModel = mongoose.model("books", bookSchema);

module.exports = {
    bookSchema,
    bookModel
};