"use strict";
const { AllBooksModel } = require('../models/AllBooks.model');

let AllBookscontroller = (req, res) => {
    AllBooksModel.find().then(data => {
        res.json(data[0]);
    })
}

module.exports = AllBookscontroller;