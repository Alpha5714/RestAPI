const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const pro = new Schema({
    
    id:{
        type: String
    },
    title:{
        type:String
    },
    name:{
        type:String
    }

})

module.exports=mongoose.model('Products',pro);
