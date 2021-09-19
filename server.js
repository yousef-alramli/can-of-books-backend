'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();
const mongoose = require('mongoose');
app.use(cors());
const MONGO_SERVER = process.env.MONGO_SERVER
const AllBookscontroller = require('./controller/AllBooks.controller')
const PORT = process.env.PORT ;
mongoose.connect(`${MONGO_SERVER}/BookStore`,{useNewUrlParser: true, useUnifiedTopology: true})

app.get('/books', AllBookscontroller)

app.listen(PORT);
