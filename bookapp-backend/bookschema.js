const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Author:{
        Type:String,
        required:true
    },
    Description:{
        type:String,
    },
    createdTime:{
        type:Date,
        default:Date.now
    }

})

module.exports =mongoose.model("schema",bookSchema)