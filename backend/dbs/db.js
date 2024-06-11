
const mongoose=require("mongoose")
const connectDB=async ()=>{
    try{
        
        await mongoose.connect("mongodb://localhost:27017/reservation")
        
        

        console.log("db connected  successfully!!")
    }
    catch(error){
        console.log("db fail"+error)
    }

}
module.exports=connectDB
