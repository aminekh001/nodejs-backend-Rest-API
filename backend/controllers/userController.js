const { CustomError } = require("../middlewares/error")
const User=require("../models/User")


const getUserController=async(req,res,next)=>{
 const {userId}=req.params
 try{
    const user=await User.findById(userId)
    if(!user){
        throw new CustomError("l'utilisateur est introuvable",404)

    }
    const {password,...data}=user
    res.status(200).json(data._doc)


 }catch(error){
    next(error)
 }


}
//updateUser

const updateUser=async(req,res,next)=>{

    const {userId}=req.params
    const userData=req.body
    try {

        const checkUser=await User.findById(userId)
        if(!checkUser){
            throw new CustomError("l'utilisateur est introuvable",404)
        }

        Object.assign(checkUser,userData)
        await checkUser.save()
        res.status(200).json({message:"succès",user:checkUser})


        
    } catch (error) {
        next(error)
    }

}
// delete user

const deleteUser=async(req,res,next)=>{
    const {userId}=req.params
    try {
        await User.findByIdAndDelete({_id: userId})

       res.status(200).json({message:"succès"})
        
    } catch (error) {
        next(error)
        
    }

}

module.exports={getUserController, updateUser,deleteUser}