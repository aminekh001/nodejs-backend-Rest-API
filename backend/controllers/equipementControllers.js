const eq=require("../models/Equipements")
const { CustomError } = require("../middlewares/error")



//add

const addeq=async(req,res,next)=>{

    const  equipementToSave=req.body
    try {

        await eq.create(equipementToSave)
        
        res.satats(200).json({message:"succès",equipements:equipementToSave})
        
    } catch (error) {

        next(error)
        
    }
}
//get all
 const getAllEq=async(req,res,next)=>{
    
    try {
        equipements= await eq.find()

        res.status(200).json(equipements)

        
    } catch (error) {
        next(error)
    }
 }
 //upadate 
 const updateEq=async(req,res,next)=>{
    const {eqId}=req.params
    const eqData=req.body

    try {
        const check=await eq.findById(eqId)
        if(!check){
            throw new CustomError("l'equipements est introuvable",404)
        }
            Object.assign(check,eqData)
            await check.save()
            res.status(200).json({message:"succès",equipements:check})
        
    } catch (error) {
        next(error)
        
    }
}
    //delete
const deleteEq=async(req, res, next)=>{
        const {eqId}=req.params

        try{
            await eq.findByIdAndDelete({_id: eqId })
            res.status(200).json({message:"succès"})

        }catch(error){
            next(error)
        }
    }

 module.exports={getAllEq,addeq,updateEq,deleteEq}