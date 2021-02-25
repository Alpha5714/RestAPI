const mongoose = require('mongoose');
const product = require('../model/product');
const Prods = require('../model/product');

function pro(){
    return {
        index(req,res){
            res.render('register')
        },
        post(req,res){
            const {nam,id,title,}=req.body;
            const prod = new Prods({
                name:nam,
                id:id,
                title:title
            })
            prod.save().then((prod)=>{
                console.log(req.body);
                return  res.redirect('/home')
            }).catch(err=>{
                return res.send('something went wrong')
            }
            
            
           
            )}
    }
}

module.exports=pro;