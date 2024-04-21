
const { CustomError } = require("../middlewares/error")
const Salle=require("../models/Salle")


//add 

const addSalle=async(req,res,next)=>{
    const newsalle=req.body
    console.log(newsalle)
    try {
      const nSalle =new Salle(newsalle)
      const createSalle = await nSalle.save()
         res.status(200).json({message:"succès",createSalle})
 
    } catch (error) {
 
     next(error) 
     
    }
 }
 
 //update
 
 const upadateSalle = async(req,res,next)=>{
   const  {salleId}=req.params
   const salleToUpdate=req.body
 
   try {
     const checkSalle=await Salle.findById(salleId)
     if(!checkSalle){
         throw new CustomError("salle not found ",404)
     }
     Object.assign(checkSalle,salleToUpdate)
     await check.save()
 
     
   } catch (error) {
     next(error)
     
   }
 }
 
 //get   
 const getSalles =async(req,res,next)=>{ 
     let salles=[]
 
     try {
 
         salles = await Salle.find()

         //res.render('pages/reservation',{ salles : salles });
         res.status(200).json(salles)
 
     } catch (error) { 
         next(error)    
     }
 
 }
 
 //delete 
 
 const deleteSalle = async(req,res,next)=>{
     const {salleId}=req.params
     try {
         await Salle.findByIdAndDelete({_id: salleId})
         res.status(200).json({message:"succès"})
     } catch (error) {
         next(error)
     }
 }
 


module.exports={addSalle,upadateSalle,getSalles,deleteSalle}