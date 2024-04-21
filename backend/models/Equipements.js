const{default:mongoose}=require("mongoose")



const equipementShema= new mongoose.Schema({
    nome:{
        type:String,
        require:true,
        trim:true,
        lowercase:true
    },
    nombre:{
        type:Number
      }

},{timestamps:true})
const Equipements=mongoose.model('Equipements',equipementShema)
module.exports=Equipements