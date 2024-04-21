const { default: mongoose } = require("mongoose");



const salleSchema=new mongoose.Schema({

    capacite:{
        type:String,
        require:true,
        
    },
    equipements:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"equipements"

    }],
    numero:{
        type:String,
        require:true
    },
    disponible:{
        type:Boolean

    },
    note:{
        type:String
    }
},{timestamps:true})

const Salle=mongoose.model("salle",salleSchema)
module.exports=Salle