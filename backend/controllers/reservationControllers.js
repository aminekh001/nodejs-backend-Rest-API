const Resrvation = require("../models/Reservation")
const Salle=require("../models/Salle")
const User=require("../models/User")
const { sendConfirmationEmail } = require("../routes/nodeemailer")





const addRes=async(req,res,next)=>{
 let  code=Math.floor(100000 + Math.random() * 900000)
    console.log(code)
try {
    const {salle,client,dateResrvation,starTime,endTime,isVerified,emailCode}=req.body
    console.log({_id:client})
    const logingUser=await User.findById({_id:client})
    console.log(logingUser.email)
    
    const newRes=new Resrvation({...req.body,emailCode:code})
    const saveRes = await newRes.save()
    res.redirect('/views/myReservation').status(200).json({message:"veuillez vérifier la réservation par mail"})
    sendConfirmationEmail(logingUser.email,saveRes.id)
    
    


} catch (error) {
    next(error)
    
}}

//get res by id 

const getres=async(req,res,next)=>{
   const  {client}=req.params
   console.log(client)
        
    try {
        const resList= await Resrvation.find({client:client})
        console.log(resList)

 res.status(200).json(resList)
    //res.render('pages/myReservation', { reservations: resList });

    } catch (error) {
        next(error)
        console.error("Error fetching reservations:", error);
        
    }
}





const confirmation=async(req,res,next)=>{
    const {resId}=req.params

try {
    const resConfirm=await Resrvation.find(resId)

        if(!resConfirm){
            res.status(404).json({message:"faire la reservation"})

        }
        if (resConfirm.isVerified===false){
            resConfirm.isVerified=true
        }
        await resConfirm.save()
        res.status(200).json({message:"succès"})
        
    
} catch (error) {
    next(error)
    
}
    }

const updateRes= async(req,res,next)=>{
    const{resId}=req.params
    const resDate=req.body

    try {
        const check=await Resrvation.findById(eqId)
        if(!check){
            throw new CustomError("la resrvation est introuvable",404)

        }
        if (check.isVerified===true){
            check.isVerified=false
        }
        await resConfirm.save()

            Object.assign(check,resData)
            await check.save()
            sendConfirmationEmail(logingUser.email,check.id)
            res.status(200).json({message:"succès",resrvation:check})

        
    } catch (error) {
        next(error)
    }
}


const deleteRes = async (req, res, next) => {
    const { resId } = req.params; // Extract the reservation ID from request parameters
    try {
        // Check if the reservation exists
        const check = await Resrvation.findById(resId);
        if (!check) {
            // If the reservation does not exist, throw a custom error
            throw new CustomError("La réservation est introuvable", 404);
        }

        // Delete the reservation
        await Resrvation.findByIdAndDelete(resId);
        
        // Send a success response
        res.status(200).json({ message: "Succès" });
    } catch (error) {
        // Pass any error to the error handling middleware
        next(error);
    }
};

    //get all res
    const getAll = async (req, res, next) => {
        try {
          const salles = await Resrvation.find();
          const sallesRes = [];
      
          for (const item of salles) {
            const nbr = await Salle.findById(item.salle);
            // Assuming nbr is a single document
            if (nbr) {
              sallesRes.push({
                numero: nbr.numero,
                capacite: nbr.capacite,
                starTime: item.starTime,
                endTime: item.endTime
              });
            }
          }
      
          res.status(200).json(sallesRes);
        } catch (error) {
          next(error);
        }
      };




module.exports={addRes,confirmation,updateRes,deleteRes,getres,getAll}