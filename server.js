'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;
const { Bookscontroller } = require('./controller/Books.controller');
const {
    creatBooksController,
    deleteBooksController,
    upsateBooksController
} = require('./controller/Books.controller');
const PORT = process.env.PORT;
mongoose.connect(`${MONGO_URL}/BookStore`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/books', Bookscontroller);
app.post('/creat-books', creatBooksController);
app.delete('/delete-book/:id', deleteBooksController);
app.put('/update-book/:id', upsateBooksController)
app.listen(PORT);
