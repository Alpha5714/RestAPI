const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const prod = require('./routes/products');
const lol = require('./routes/lol')

const app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect('mongodb+srv://test:1234@cluster0.mz7zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(prod);
app.use(lol);

app.listen(3000);