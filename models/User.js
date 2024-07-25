const mongoose = require("mongoose");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pasword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    data:{
        type:Date,
        default:Date.now
    },
});

module.exports=mongoose.model('user',UserSchema);