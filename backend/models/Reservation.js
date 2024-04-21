const {default:mongoose}=require('mongoose')




const resrvationShema=new mongoose.Schema({
    salle:{
        type:mongoose.Schema.ObjectId,
        ref:"Salle",
        require:true
    },
    client:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true
    },
    dateResrvation:{
        type:Date,
        require:true
    },
    starTime:{
        type:Date,
        require:true
    },
    isVerified:{
        type:Boolean,
        default:false

    },
    emailCode:{
        type:String,

    },
    endTime:{
        type:Date,
        require:true
        
    }


},{timestamps:true})
const Resrvation=mongoose.model('Resrvaion',resrvationShema)
module.exports=Resrvation