const express = require('express');
const app = express.Router();

app.get('/home',(req,res)=>{
    res.render('cong')
})

module.exports=app;