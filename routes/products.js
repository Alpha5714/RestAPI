const express = require('express');
const prod = require('../controller/products');

const app= express.Router();


app.get('/',prod().index);
app.post('/',prod().post)

module.exports=app