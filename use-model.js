const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    
    websiteName:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5,     
    },

},{timestamps:true}
);

const Usrr=mongoose.model("User",UserSchema)