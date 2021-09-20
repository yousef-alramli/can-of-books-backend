'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const MONGO_SERVER = process.env.MONGO_SERVER;
const {Bookscontroller} = require('./controller/Books.controller');
const {creatBooksController, deleteBooksController} = require('./controller/Books.controller');
const PORT = process.env.PORT ;
mongoose.connect(`${MONGO_SERVER}/BookStore`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/books', Bookscontroller);
app.post('/creat-books', creatBooksController);
app.delete('/delete-book/:id', deleteBooksController);

app.listen(PORT);
