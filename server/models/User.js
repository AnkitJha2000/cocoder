const mongoose = require("mongoose")

const userSchema = new mongoose.Schema( {
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }    
} , {timestamps : true});

const userModel = mongoose.model('user', userSchema); 

module.exports = {userModel};