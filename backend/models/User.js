const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({

    userName:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true

    },
    isAdmin:{
        type:Boolean
    }

},{timestamps:true})
const User=mongoose.model("user",userSchema)
module.exports=User