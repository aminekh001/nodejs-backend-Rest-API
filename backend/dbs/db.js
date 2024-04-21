
const mongoose=require("mongoose")
const connectDB=async ()=>{
    try{
        
        await mongoose.connect("mongodb://localhost:27017/reservation")
        //("mongodb+srv://aminekhairi88:SOCIAL@cluster0.o4ze18s.mongodb.net/reservation?retryWrites=true&w=majority&appName=Cluster0")
        

        console.log("db connected  successfully!!")
    }
    catch(error){
        console.log("db fail"+error)
    }

}
module.exports=connectDB